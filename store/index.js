export const state = () => ({})

export const actions = {
  async login({ state }, data) {
    await this.$auth.loginWith('local', { data })
    return { user: this.$auth.user, token: this.$auth.getToken() }
  },
  logout() {
    return this.$auth.logout()
  },
}
