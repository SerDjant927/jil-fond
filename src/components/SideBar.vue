<template>
  <div class="sidebar">
    <form class="search-form" action="">
      <div class="search-form__block">
        <label for="search-input">Введите имя сотрудника:</label>
        <input @input="handleSearch" v-model="searchInput" placeholder="Введите Id или имя" type="text"
          id="search-input" name="search">
      </div>
      <div class="search-form__block">
        <label for="search-result">Результаты</label>
        <ul class="search-result" id="search-result" v-if="filteredResults.length > 0">
          <li class="search-result__element" v-for="result in filteredResults" :key="result.id"
            @click="selectResult(result)" :class="{ chosen: result === selectedResult }">
            <div class="search-result__img">
              <img :src="result.img" alt="Фото" v-if="result.img">
              <img src="./img/gag-img_small.png" alt="Фото" v-else>
            </div>
            <div class="search-result__info">
              <span class="search-result__name">{{ result.name }}</span>
              <span class="search-result__mail">{{ result.email }}</span>
            </div>
          </li>
        </ul>
        <span class="nothing-found" v-else>Ничего не найдено</span>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SideBar',
  data() {
    return {
      results: [],
      searchInput: '',
      selectedResult: null
    };
  },
  created() {
    this.getSearchResults();
  },
  methods: {
    handleSearch() {
      let searchTerms = this.searchInput.split(',').map(term => term.trim().toLowerCase());
      this.filteredResults = this.results.filter(result => {
        return searchTerms.some(term => {
          return result.name.toLowerCase().includes(term) || result.id.toString().includes(term);
        });
      });
    },
    getSearchResults() {
      let getUsersList = `https://jsonplaceholder.typicode.com/users`;
      axios.get(getUsersList)
        .then((response) => {
          this.results = response.data;
          console.log(this.results);
        });
    },
    selectResult(result) {
      if (this.searchInput === '') {
        this.selectedResult = null;
        this.filteredResults = [];
      } else {
        this.selectedResult = result;
        console.log(result);
        this.$emit('search-results', result);
        console.log(result);
      }

    }
  },
  computed: {
    filteredResults() {
      if (this.searchInput.length < 1) {
        return [];
      }
      let searchTerms = this.searchInput.split(',').map(term => term.trim().toLowerCase());

      return this.results.filter(result => {
        return searchTerms.some(term => result.name.toLowerCase().includes(term) || result.id.toString().includes(term));
      });
    },
  },
  watch: {
    searchInput() {
      if (this.searchInput === '') {
        this.selectedResult = null;
        this.$emit('search-results', null);
      }
    }
  }
};

</script>


<style scoped lang="scss">
$primary-color: #000000;
$secondary-color: #76787D;

.sidebar {
  padding: 27px 30px 30px 20px;
}

.search-form {
  display: flex;
  flex-direction: column;
  row-gap: 22px;
}

.search-form__block {
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  align-items: flex-start;

  label {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #333;
  }

  input {
    border: 1px solid #E9ECEF;
    border-radius: 16px;
    padding: 14px 16px;
    color: $primary-color;

  }

  input:focus {
    outline: none;
    border-radius: 0px;
    border-color: #a8a8a8;
  }
}

.nothing-found {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: $secondary-color;
}

.search-result {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 18px;

  &__element {
    box-shadow: 0px 0px 10px 0px #0000001A;
    width: 240px;
    height: 70px;
    max-width: 100%;
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 70px 1fr;
    ;
  }

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 5px;
    padding: 15px;
  }

  &__name {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    color: #333;
  }

  &__mail {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #76787D;
  }
}

.chosen {
  background-color: lightblue;
}

@media(max-width:1024px) {
  .sidebar {
    padding: 0;
  }

  .search-result {
    &__element {
      width: 100%;
    }
  }
}
</style>
