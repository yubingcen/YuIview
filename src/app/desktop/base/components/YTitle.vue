<template>
  <div>
    <div :class="{'title-box': true, 'no-border': noBorder}" :style="`color: ${color};border-color: ${color}`">
      <div class="title" :style="`font-size: ${size}px; line-height: ${lineHeight}px;`">
        <div class="title-text">
          <Icon :type="icon" :style="`font-size: ${size +  8}px`"/>
          <div>
            {{ title }}
          </div>
        </div>
        <div class="english-title" :style="`color: ${EnglishTitleColor};`">
          {{ EnglishTitle }}
        </div>
        <slot name="left"></slot>
      </div>
      <slot name="right">
        <router-link v-if="moreName && moreLink" :to="moreLink" target="target">
          <div class="more-name">{{ moreName }} ></div>
        </router-link>
      </slot>
    </div>
    <div v-if="showBottom" class="hrs"></div>
  </div>
</template>
<script>
export default {
  name: 'gc-title',
  components: {},
  props: {
    color: {
      type: String,
      default: '#333'
    },
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 20,
    },
    lineHeight: {
      type: Number,
      default: 28,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
    showBottom: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    EnglishTitle: {
      type: String,
      default: '',
    },
    EnglishTitleColor: {
      type: String,
      default: '#eee',
    },
    titleLink: {
      type: String,
      default: '',
    },
    moreName: {
      type: String,
      default: ''
    },
    moreLink: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_blank',
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    goto () {
      window.open('/')
    }
  }
}
</script>

<style lang="less" scoped>
/*@import '~@desktop/styles/global';*/
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4285f4;
  border-left: 4px solid #4285f4;
  padding-left: 20px;
  .title {
    display: flex;
  }
  .more-name {
    font-size: 14px;
    color: #666;
  }
}
.hrs {
  border: 0;
  height: 1px;
  /*background: #333;*/
  background: #4285f4;
  margin-top: .5rem;
  /* background-image: linear-gradient(to right, @themeColor); */
  // background-image: linear-gradient(to right, @themeColor, @themeSimpleColor, #fff);
  margin-bottom: 45px;
}
.english-title{
  padding-bottom: 2px;
  font-weight: 500;
  margin-left: .5rem;
  line-height: 16px;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
}
.title-text {
  display: flex;
  align-items: center;
  font-weight: 600;
}
.no-border {
  border: none;
  padding-left: 0;
}
</style>
