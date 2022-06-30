import React from 'react';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Logo from "@site/static/img/logo.svg";
import styles from './index.module.css';

function HomepageHeader() {

  return (
    <header className="hero">
      <div className="container">
        <div className="text--center">
          <Logo />
          <span className={styles.heroTitleTextHtml}>
            <p className="hero__subtitle margin-vert--lg"
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: 'homepage.hero.subtitle',
                  message: 'A <b>inversion of control container</b> for build better Node.js applications.'
                })
              }}
            />
          </span>
          <a className="button button--outline button--primary button--lg"
            href="getting-started">
            Get Started
          </a>
        </div>

      </div>
    </header >
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description={siteConfig.customFields?.description as string}>
      <HomepageHeader />
    </Layout>
  );
}
