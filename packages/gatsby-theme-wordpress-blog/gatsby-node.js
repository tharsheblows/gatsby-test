const createPosts = require(`./utils/createPosts`)
const createSitePages = require(`./utils/createSitePages`)
const createCategories = require(`./utils/createCategories`)
const createTags = require(`./utils/createTags`)
const createUsers = require(`./utils/createUsers`)

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  reporter.warn("make sure to load data from somewhere!")
  await createPosts({ actions, graphql }, options)
  await createSitePages({ actions, graphql }, options)
  await createCategories({ actions, graphql }, options)
  await createTags({ actions, graphql }, options)
  await createUsers({ actions, graphql }, options)
}
