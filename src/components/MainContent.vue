<template>
  <div class="main__bottom">
    <SideBar @search-results="handleSearchResults" />
    <div class="main-content">
      <div class="personal-card" v-if="selectedResult">
        <div class="personal-card__img">
          <img :src="selectedResult.img" alt="Фото" v-if="selectedResult.img">
          <img src="./img/gag-img.png" alt="Фото" v-else>
        </div>
        <div class="personal-card__info">
          <h3 class="personal-card__name">{{ selectedResult.name }}</h3>
          <p class="personal-card__email">{{ selectedResult.email }}</p>
          <p class="personal-card__phone">{{ selectedResult.phone }}</p>
          <p class="personal-card__about">О себе</p>
          <p class="personal-card__esse">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, at, ducimus placeat, unde ut ratione
            voluptatibus quia a animi laudantium ea. Nam unde nesciunt quo, modi ab repellendus saepe natus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from './SideBar.vue';

export default {
  components: {
    SideBar,
  },
  name: 'MainContent',
  data() {
    return {
      selectedResult: null,
    };
  },

  methods: {
    handleSearchResults(result) {
      if (this.searchInput === '') {
        this.selectedResult = null;
      } else {
        this.selectedResult = result;
      }

    },
  },
};
</script>
<style scoped lang="scss">
$primary-color: #000000;
$secondary-color: #76787D;

.main-content {
  border-left: 1px solid #E0E0E0;
  padding: 30px 30px 30px 21px;
}

.personal-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
  width: 100%;

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 424px;
    max-width: 100%;
    height: 286px;
    max-height: auto;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    row-gap: 10px;

    p {
      margin: 0;
    }
  }

  &__name {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: $primary-color;
    margin: 0;
  }
}

@media(max-width:1024px) {
  * {
    box-sizing: border-box;
  }

  .main {
    padding: 12px;

    &-content {
      border-left: 0;
      border-top: 1px solid #E0E0E0;
      padding: 0;
    }

    &__bottom {
      margin-top: 24px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 24px;
    }
  }

  .personal-card {
    padding: 10px
  }
}

@media(max-width:768px) {
  .personal-card {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
}
</style>