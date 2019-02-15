<template>
  <div class="layout">
    <Layout>
      <Header class="y-layout-header">
        <Menu mode="horizontal" theme="dark" :active-name="activeNav">
          <div class="layout-logo"></div>
          <!--<div style="float: left; margin-left: 30px;">-->
            <!--<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>-->
          <!--</div>-->
          <div class="layout-nav">
            <!--主要导航-->
            <XLink v-for="nav in layoutConfig.navData" :key="nav.name" :to="nav.path">
              <MenuItem :name="nav.name">
                <Icon :type="nav.icon"></Icon>
                {{ nav.title }}
              </MenuItem>
            </XLink>
            <!-- 拓展导航 -->
            <XLink v-for="(nav, key) in config.extNav" :key="key" :to="nav.link || key">
              <MenuItem :name="key">
                <Icon :type="nav.icon"></Icon>
                {{ nav.text }}
              </MenuItem>
            </XLink>
          </div>
        </Menu>
      </Header>
      <Layout>
        <!--<Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">-->
        <Sider ref="side1" collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu theme="dark" width="auto" :open-names="config.openSides" :active-name="activeSide" :class="menuitemClasses">
            <XLink :to="side.path" v-for="side in findNav(activeNav)" :key="side.name">
              <MenuItem :name="side.name + ''">
                <Icon :type="side.icon"></Icon>
                <span>{{ side.title }}</span>
              </MenuItem>
            </XLink>
          </Menu>
        </Sider>
        <Layout :style="{padding: '24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <slot></slot>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import LayoutConfig from '@desktop/config/LayoutConfig'
import XLink from '@base/components/XLink'
export default {
  name: 'y-layout',
  components: { XLink },
  props: {
    config: {
      type: Object,
      default: function () {
        return {
          extNav: {},
          activeNav: null,
          activeSide: null,
          openSides: [],
          sides: null
        }
      }
    },
    title: String
  },
  data () {
    return {
      layoutConfig: LayoutConfig,
      isCollapsed: false,
      currentPath: ''
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    },
    activeNav () {
      return this.config.activeNav || this.findMatchItemName(this.layoutConfig.navData)
    },
    activeSide () {
      return this.config.activeSide || this.findMatchItemName(this.layoutConfig.navData)
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    findMatchItemName (items) {
      const routerName = this.$route.name
      let find = items.filter(el => { return el.name === routerName })
      if (find[0]) {
        return find[0].name
      } else {
        return ''
      }
    },
    findNav (name) {
      let find = this.layoutConfig.navData.filter(el => { return el.name === name })
      if (find[0]) {
        return find[0].children
      } else {
        return []
      }
    }
  }
}
</script>
<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layout /deep/ .ivu-layout {
  height: 100%;
}
.layout /deep/ .ivu-layout-has-sider {
  height: 100%;
}
.layout /deep/ .ivu-layout-sider {
  height: 100%;
}
.y-layout-header {
  box-shadow: 2px 2px 5px #333333;
  border-bottom: 1px solid #9a9a9a;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.menu-icon{
  color: aliceblue;
  transition: all .3s;
}
.rotate-icon{
  transform: rotate(-90deg);
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span{
  width: 0px;
  transition: width .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
