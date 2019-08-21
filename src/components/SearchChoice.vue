<template>
  <div class="search-choice">
    <div class="wrapper">
      <div class="choice-wrap">
        <a href="javascript:;" class="choice-item active">房源</a>
        <a href="javascript:;" class="choice-item ">景区</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchChoice',
    props: {
      data: {
        type: Array,
        defuault () {
          return [];
        }
      }
    },
    data () {
      return {
        showSelect: false,
        city: '',
        value6: '',
        count: null,
        adultCount: 0,
        childrenCount: 0,
        babyCount: 0,
        babyAdd: null,
        showNumberselect: false
      };
    },
    methods: {
      search (type) {
        if (type === 'blur') {
          this.showSelect = false;
        } else {
          this.showSelect = true;
        }
      },
      changeCity (data) {
        this.city = data.city;
        this.showSelect = false;
      },
      showNumber () {
        this.showNumberselect = true;
      },
      reduce (type) {
        // if (this.count >= 0) {
        //   this.count--;
        // }
        if (type === 'adult' && this.adultCount > 0) {
          this.adultCount--;
          this.count--;
        }
        if (type === 'children' && this.childrenCount > 0) {
          this.childrenCount--;
          this.count--;
        }
        if (type === 'baby' && this.babyCount > 0) {
          this.babyCount--;
          this.babyAdd--;
        }
      },
      add (type) {
        if (type === 'adult') {
          this.adultCount++;
          this.count++;
        }
        if (type === 'children') {
          this.childrenCount++;
          this.count++;
          // this.count += this.childrenCount;
        }
        if (type === 'baby') {
          this.babyCount++;
          this.babyAdd++;
        }
      },
      cencel () {
        this.adultCount = 0;
        this.childrenCount = 0;
        this.babyCount = 0;
        this.count = null;
        this.babyAdd = null;
      },
      sure () {
        this.showNumberselect = false;
      }
    }
  };
</script>

<style lang="less" scoped>
  .search-choice{
    margin-top: -80px;

    .choice-wrap{
      padding-bottom: 15px;
      border-bottom: 1px solid #ebebeb;
      margin-top: 120px;
      /*height: 70px;*/
      .choice-item{
        padding: 20px 0 16px;
        font-size: 18px;
        font-weight: bolder;
        color: #000;
        margin-right: 40px;

        &.active{
          color: #398288;
          border-bottom: 2px solid #398288;
          border-radius: 2px;
        }
      }
    }
  }
</style>
<style>
  .el-date-editor .el-range-input, .el-date-editor .el-range-separator {
    font-size: 18px;
    color: #484848 !important;
  }

  .el-date-editor .el-range__icon {
    font-size: 20px;
    color: #484848;
  }
</style>
