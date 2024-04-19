const apiError = require("../exceptions/server.error")
const tokerService = require("../services/token.service")

function authGuard(role) {
  return function (req, res, next) {
    try {
      const authorizationHeader = req.headers.authorization
      if (!authorizationHeader) {
        if (role === "noAuth") {
          return next()
        }

        return next(apiError.UnauthorizedError())
      }

      const accessToken = authorizationHeader.split(" ")[1]
      if (!accessToken) {
        return next(apiError.UnauthorizedError())
      }

      const userData = tokerService.validateAccessToken(accessToken)
      if (!userData) {
        return next(apiError.UnauthorizedError())
      }

      if (userData.payload.isBlocked) {
        return next(apiError.ForbiddenError())
      }

      if (role && role !== "noAuth" && !userData.payload.roles.includes(role)) {
        return next(apiError.ForbiddenError())
      }

      req.user = userData
      next()
    } catch (e) {
      return next(apiError.UnauthorizedError())
    }
  }
}

export const userGuard = authGuard("user")
export const adminGuard = authGuard("admin")
export const noAuth = authGuard("noAuth")