import { LocalScheme } from '~auth/runtime'

export default class CustomScheme extends LocalScheme {
  // Override `fetchUser` method of `local` scheme
  // eslint-disable-next-line require-await
  async fetchUser(endpoint) {
    // Token is required but not available
    if (!this.check().valid) {
      return
    }

    // User endpoint is disabled.
    if (!this.options.endpoints.user) {
      this.$auth.setUser({})
      return
    }

    // Try to fetch user and then set
    return this.$auth
      .requestWith(this.name, endpoint, {
        ...this.options.endpoints.user,
        transformRequest: [
          (data, headers) => {
            return JSON.stringify({ idToken: headers.Authorization })
          },
        ],
        headers: { 'Content-Type': "'application/json'" },
        transformResponse: [
          function (data) {
            // Do whatever you want to transform the data
            try {
              return JSON.stringify(JSON.parse(data).users[0])
            } catch (error) {
              console.log(error)
            }
          },
        ],
      })
      .then((response) => {
        const user = JSON.parse(response.data)
        this.$auth.setUser(user)
        return user
      })
      .catch((error) => {
        this.$auth.callOnError(error, { method: 'fetchUser' })
      })
  }
}
