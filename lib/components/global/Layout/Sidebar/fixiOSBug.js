export default {
  mounted() {
    // In order to fix the click on menu on the ios device will trigger the mouseleave bug
    // https://github.com/PanJiaChen/vue-element-admin/issues/1135
    this.fixBugIniOS()
  },
  methods: {
    fixBugIniOS() {
      const $subMenu = this.$refs.subMenu

      function handleMouseenter(event, showTimeout = this.showTimeout) {
        if (
          !('ActiveXObject' in window) &&
          event.type === 'focus' &&
          !event.relatedTarget
        ) {
          return
        }
        const { rootMenu, disabled } = this
        if (
          (rootMenu.menuTrigger === 'click' &&
            rootMenu.mode === 'horizontal') ||
          (!rootMenu.collapse && rootMenu.mode === 'vertical') ||
          disabled
        ) {
          return
        }
        this.dispatch('ElSubmenu', 'mouse-enter-child')
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath)
        }, showTimeout)

        // fix on element ui
        if (this.appendToBody && this.$parent.$el !== this.$el) {
          this.$parent.$el.dispatchEvent(new MouseEvent('mouseenter'))
        }
      }

      if ($subMenu) {
        $subMenu.handleMouseenter = handleMouseenter.bind($subMenu)
      }
    },
  },
}
