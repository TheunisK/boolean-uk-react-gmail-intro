import './styles/app.css'

import MainArticleH1 from './main_article_h1'
import MainArticleHeader from './main_article_header'
import MainArticleEmail from './main_article_email'
import MainArticleEmailActions from './main_article_email_actions'

function MainArticle () {
    return (
        <article className="email-content">
          <MainArticleH1 />
          <MainArticleHeader />
          <MainArticleEmail />
          <MainArticleEmailActions />
        </article>
    )
}

export default MainArticle