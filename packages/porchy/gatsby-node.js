const createPosts = require(`./utils/createPosts`)
const createSitePages = require(`./utils/createSitePages`)
const createCategories = require(`./utils/createCategories`)
const createTags = require(`./utils/createTags`)
const createUsers = require(`./utils/createUsers`)

// Copy and pasting from https://developer.okta.com/blog/2020/02/18/gatsby-react-netlify
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    // Exclude Sign-In Widget from compilation path
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /okta-sign-in/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  reporter.warn("make sure to load data from somewhere!")
  await createPosts({ actions, graphql }, options)
  await createSitePages({ actions, graphql }, options)
  await createCategories({ actions, graphql }, options)
  await createTags({ actions, graphql }, options)
  await createUsers({ actions, graphql }, options)
}
