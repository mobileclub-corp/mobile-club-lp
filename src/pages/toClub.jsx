import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import mediaquery from '../../assets/styles/variable';
import '../../assets/styles/reset.css';

import Header from '../components/header';

import TopImage from '../../assets/images/sp/top-lp.png';
import FourRunkImage from '../../assets/images/toClub/4runk.png';
import ProfitImage from '../../assets/images/toClub/profit.png';
import SupportImage_01 from '../../assets/images/toClub/support01.png';
import FiveReasonImage from '../../assets/images/toClub/5reason.png';
import StepImage_01 from '../../assets/images/toMan/step01.png';
import StepImage_02 from '../../assets/images/toMan/step02.png';
import StepImage_03 from '../../assets/images/toMan/step03.png';
import TwitterIcon from '../../assets/images/sp/twitterIcon.png';
import FacebookIcon from '../../assets/images/sp/facebookIcon.png';
import InstagramIcon from '../../assets/images/sp/instagramIcon.png';

const Container = styled.div`
  position: relative;
  width: 378px;
  margin: 0 auto;
`

// LINE＠追従ボタン
const FollowLineButton = styled.div`
  position: fixed;
  bottom: 0;
  width: 180px;
  margin-left: 178px;
  padding: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const FollowLineButtonTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 28px;
  font-family: Hiragino Kaku Gothic Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 130.2%;
  color: #000;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px 8px 0px 0px;
`

const FollowLineButtonBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 52px;
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #fff;
  background: #1dcd00;
  border: 1px solid #ddd;
  border-radius: 0px 0px 8px 8px;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

// Main
const MainCover = styled.main`
  background: #ffeaeb;
`

// Top
const TopCover = styled.section`
  position: relative;
  width: 376px;
  height: 460px;
  background-image: url(${TopImage});
`

const TopTitleCover = styled.div`
  width: 320px;
  height: 95px;
  margin: 0 auto;
  padding: 68px 0 33px;
  font-family: YuMincho;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 130.2%;
  text-align: center;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > h1 > span {
    font-size: 18px;
  }
`

const TopTextCover = styled.div`
  position: absolute;
  top: 41%;
  font-family: Hiragino Kaku Gothic Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 130.2%;
  color: #ff444f;
`

// LINEアカウント登録
const LineAddCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  padding: 20px 8px;
  background: #F0DDDD;
  border: 1px solid #B5B5B5;
  border-radius: 8px;
`

const LineAddText = styled.div`
  font-family: Hiragino Kaku Gothic Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 130.2%;
  color: #000000;

  > span {
    color: #1DCD00;
  }
`

const LineAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 295px;
  height: 75px;
  margin: 16px auto 10px;
  color: #fff;
  font-family: Hiragino Kaku Gothic Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  background: #1dcd00;
  border-radius: 8px;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

// WEB上に出店?? それってどういうこと?!
const WhatsMobileClubCover = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 70px;
  color: #000;
  background: #ffeaeb;

  > h2 {
    margin-bottom: 30px;
    font-family: Hiragino Kaku Gothic Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 39px;
    text-align: center;
  }
`

const WhatsMobileClubText = styled.div`
  width: 320px;
  font-family: YuMincho;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  
  > p:not(:first-of-type) {
    margin-top: 14px;
  }
`

// 私たちの理念
const NextToVisionCover = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 100px;
  text-align: center;
`

const NextToVisionLink = styled(Link)`
  display: block;
  font-family: YuMincho;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 130.2%;
  text-decoration-line: underline;
  color: rgba(0, 0, 0, 0.6);
`

// モバクラでのキャストの稼ぎ方
const HowToEarnTitle = styled.div`
  font-family: YuMincho;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 130.2%;
  color: rgb(255, 68, 79);
  text-align: center;
`

const HowToEarnCover = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 28px;
  text-align: center;
  background-color: #f8a6ae;
  margin-bottom: 60px;
`

const HowToEarn = styled.div`
  > h2 {
    color: #fff;
    font-family: Abhaya Libre;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 26px;
    letter-spacing: 0.3em;
  }
`

const HowToEarnList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin: 15px 38px;
  padding: 15px;
  box-sizing: border-box;
  color: #fff;
  text-align: left;
  background: #f55560;
  border-radius: 8px;

  > li {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
    text-align: left;

    &:not(:first-of-type) {
      margin-top: 15px;
    }

    > span {
      display: inline-block;
      width: 100%;
      margin-left: 0 auto;
      text-align: right;
    }
  }
`

const HowToEarnSplitBorder = styled.div`
  display: flex;
  justify-content: center;

  > span {
    width: 300px;
    border-top: 1px solid #000;
  }
`

// 月どれくらい稼げるの?
const HowManyProfitCover = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 78px 0;

  > h2 {
    font-family: Hiragino Kaku Gothic Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 130.2%;
    color: rgba(0, 0, 0, 0.6);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 18px 0;
    text-align: center;
  }
`

const HowManyProfitText = styled.div`
  margin: 20px 0;
  font-family: Hiragino Kaku Gothic Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 130.2%;
  color: #000;
`

// 働くって具体的に 何をしたらいいの?
const AboutStepCover = styled.section`
  padding: 60px 0px;
  text-align: center;
`

const AboutStepTitle = styled.h2`
  font-family: Hiragino Kaku Gothic Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const AboutStep = styled.div`
  margin: 40px 0px;

  > figcaption {
    margin: 10px 0;
    line-height: 24px;
  }
`

// モバクラが選ばれる5つの理由
const FiveReasonsCover = styled.section`
  display: flex;
  justify-content: center;
  padding: 56px 0 0;
  background: #ffeaeb;
`

// 今すぐ簡単応募（LINE@）
const EasyLineAddCover = styled.div`
  width: 335px;
  margin: 65px auto;
  background: #ffeaeb;
`

const EasyLineAddTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 57px;
  font-family: Hiragino Kaku Gothic Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 130.2%;
  color: #fff;
  background: #ff7d85;
  border-radius: 8px 8px 0px 0px;
`

const EasyLineAddBottom = styled.div`
  padding: 16px 18px;
  background: #fff;
  border-radius: 0px 0px 8px 8px;
`

// より詳しくモバクラを知りたい方へ
const UnderstandMobileClubTitle = styled.h2`
  font-family: Hiragino Kaku Gothic Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #000;
  padding: 12px 0;
  border-top: 1px solid #ff7d85;
  border-bottom: 1px solid #ff7d85;
}
`

const UnderstandMobileClubList = styled.dl`
  padding: 45px 28px;

  > dt {
    font-family: Hiragino Kaku Gothic Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    text-decoration-line: underline;
    color: #000;

    &:not(:first-of-type) {
      margin-top: 45px;
    }
  }

  > dd {
    margin-top: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
    color: #000;

    > p:not(:first-of-type) {
      margin-top: 14px;
    }
  }
`

const UnderstandMobileClubTextList = styled.dl`
  > dt:not(:first-of-type) {
    margin-top: 14px;
  }
`

// Footer
const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 375px;
  margin: 0 auto;
  padding: 40px 0;
  color: #fff;
  background: #ff444f;
  box-sizing: border-box;

  ${mediaquery.desktop`
    max-width: 1280px;
  `}
`

const FooterTitle = styled.h3`
  font-family: YuMincho;
  font-weight: 800;
  font-size: 30px;
  line-height: 45px;
`

const SnsIconCover = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 160px;
  margin: 30px auto 40px;
`

const CopyrightCover = styled.div`
  font-family: YuGothic;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
`

export default function ToClub() {
  return (
    <Container>
      <Header />
      <FollowLineButton>
        <FollowLineButtonTop>LINEから簡単応募してみる</FollowLineButtonTop>
        <FollowLineButtonBottom><a href="https://line.me/R/ti/p/@842zcnjv" target="_blank" rel="noreferrer noopener">LINE＠ 友達追加</a></FollowLineButtonBottom>
      </FollowLineButton>

      <MainCover>
        <TopCover>
          <TopTitleCover>
            <h1>Mobile Club<br/>
            ワンランク上の稼ぎ方<br/>
            <span>出店×ホステスマッチングサービス</span></h1>
          </TopTitleCover>

          <TopTextCover>＼2020.11.15リリース予定／</TopTextCover>

          <LineAddCover>
            <LineAddText>まずは<span>LINE@友達追加</span>をしましょう！<br />
            チャット内で詳しい内容はしっかりとご案内致します♪</LineAddText>
            <LineAdd><a href="https://line.me/R/ti/p/@842zcnjv" target="_blank" rel="noreferrer noopener">LINE＠ 友達追加</a></LineAdd>
          </LineAddCover>
        </TopCover>
        <WhatsMobileClubCover>
          <h2>WEB上に出店??<br />
          それってどういうこと?!</h2>
          <WhatsMobileClubText>
            <p>今コロナ禍や時代の流れで水商売やその周辺の飲食店、その地域全体が低迷しています。</p>
            <p>昔からある馴染みのお店が潰れてしまったり、せっかく縁があり雇った従業員をしぶしぶ解雇してしまったり、、、辛い思いをしたかたは多いのではないでしょうか?</p>
            <p>そんな方達に少しでも安心してもらいたくて私達はこのシステムを開発しました。</p>
            <p>お客様にして頂きたいことはWEB上に第二店舗目を出店して頂き、キャストとお客様を繋ぐ架け橋になってもらいたいと考えております。</p>
            <p>いつもは店内でお客様とキャストをマッチングさせ発生した料金を売上にしていると思います。その会う場所を店内から店外に移動してもらうイメージです。</p>
            <p>WEB店舗上で女の子とお客様をマッチングさせ、そのまま店外デートをしていただき、その際に発生した料金を店舗側の売上にしていただきます。</p>
            <p>それにより、周りの飲食店、リアル店舗、その地域全体の活性化を目的としています。</p>
          </WhatsMobileClubText>
        </WhatsMobileClubCover>
        <NextToVisionCover>
          <NextToVisionLink to="/vision">〜私達の理念〜</NextToVisionLink>
        </NextToVisionCover>
        <HowToEarnTitle>＼競合しないので安心／</HowToEarnTitle>
        <HowToEarnCover>
          <HowToEarn>
            <div><img src={FourRunkImage} alt=""></img></div>
          </HowToEarn>
        </HowToEarnCover>
        <HowManyProfitCover>
          <h2>月どれくらい稼げるの？</h2>
          <div><img src={ProfitImage} alt=""></img></div>
          <HowManyProfitText>※上記はあくまでも概算の金額となります。</HowManyProfitText>
        </HowManyProfitCover>
        <AboutStepCover>
          <AboutStepTitle>お店を出すには<br />
          具体的にどうしたらいいの？</AboutStepTitle>
          <AboutStep>
            <figure><img src={StepImage_01} alt=""></img></figure>
            <figcaption>まずは従業員探し！<br />
            この子がいいなと思ったらメッセージを送ります<br />
            （従業員数は最低５人から）</figcaption>
          </AboutStep>

          <AboutStep>
            <figure><img src={StepImage_02} alt=""></img></figure>
            <figcaption>お店の人としっかり面談をして<br />
            働くかどうか決めてもらいます</figcaption>
          </AboutStep>

          <AboutStep>
            <figure><img src={StepImage_03} alt=""></img></figure>
            <figcaption>採用になった女の子に、<br />
            お店IDをメッセージで送ります。</figcaption>
          </AboutStep>

          <AboutStep>
            <figure><img src={StepImage_01} alt=""></img></figure>
            <figcaption>お店IDを女の子が自分の<br />
            マイページに登録すれば完了！</figcaption>
          </AboutStep>
        </AboutStepCover>
        <HowManyProfitCover>
          <h2>お店を出せたはいいけど、<br />
          何をしたらいいの??</h2>
          <div><img src={SupportImage_01} alt=""></img></div>
        </HowManyProfitCover>
        <FiveReasonsCover>
          <div><img src={FiveReasonImage} alt=""></img></div>
        </FiveReasonsCover>
        <EasyLineAddCover>
          <EasyLineAddTop>今すぐ簡単応募！</EasyLineAddTop>
          <EasyLineAddBottom>
            <LineAddText>まずは<span>LINE@友達追加</span>をしましょう！<br/>
            チャット内からご案内致します♪</LineAddText>
            <LineAdd><a href="https://line.me/R/ti/p/@842zcnjv" target="_blank" rel="noreferrer noopener">LINE＠ 友達追加</a></LineAdd>
          </EasyLineAddBottom>
        </EasyLineAddCover>
        <section>
          <UnderstandMobileClubTitle>より詳しくモバクラを知りたい方へ</UnderstandMobileClubTitle>
          <UnderstandMobileClubList>
            <dt>コロナでお困りのあなたへ</dt>
            <dd>コロナ禍の影響で「お店で働けない、収入が減ってしまった」というホステスさん、その他の業種 の方で十分な接待能力を有する女性のために当サービスを立上げました。</dd>

            <dt>どのくらい稼げるの?</dt>
            <dd>
              <p>1回の同伴(2時間半)で¥30,000から、チップや人気に応じて数万〜数十万くらいまでの幅があるのが一般的です。(一般的に"タク代飲み"や"ギャラ飲み"と同様以上の水準です。)</p>
              <p>自分の自由なタイミングで自分らしく稼げるのが魅力です。</p>
            </dd>

            <dt>開催場所は?</dt>
            <dd>
              <p>現在は北新地（大阪）が中心です。</p>
              <p>コロナ渦で生活・営業に困っている地域を中心にサービスを展開しております。</p>
              <p>お店はコロナ対策をしっかりと整えた、会員制のバーや個室のあるカラオケバーなど、一般の人の目の触れない場所がよく使われます。</p>
              <p>また開催時間は主に平日の21時〜26時ごろがピーク。プライベートの会食、飲み会などでよく開催されます。</p>
            </dd>

            <dt>どんな人が参加しているの?</dt>
            <dd>
              <UnderstandMobileClubTextList>
                <dt>【ゲスト側】</dt>
                <dd>
                  <p>経営者や企業の役員、芸能界の方々や、医者、弁護士、会計士、投資家などが中心です。年齢は30代以降〜40代が中心です。</p>
                  <p>コロナ禍にも耐えうる経済的にも社会的にも満たされたお立場を兼ね揃えた方がほとんどです。</p>
                </dd>

                <dt>【キャスト側】</dt>
                <dd>
                  <p>ホステス経験者さん、20代・30代のOLさん、自身の接待能力のキャリアを活用したい方に参加いただいています。</p>
                  <p>人気の方は毎日のように何件もお声掛けいただけるようになります。</p>
                </dd>
              </UnderstandMobileClubTextList>
            </dd>

            <dt>どうやったら参加できるの?</dt>
            <dd>お金持ちの富裕層がお相手となるため、紹介などでしか通常は参加することができません。<br/>
            モバクラでは全員面接を実施し、双方が安心して参加できるようにしています。</dd>

            <dt>こんな人が呼ばれやすい?</dt>
            <dd>
              <UnderstandMobileClubTextList>
                <dt>■時間を守れる</dt>
                <dd>少しの遅刻や事前に連絡がある場合はもちろん大丈夫ですが、毎回ドタキャンや遅刻だとゲスト様が困ってしまいます。最低限のマナーとして心がけましょう。</dd>

                <dt>■人と話せる</dt>
                <dd>当然ですが、人と楽しくお話ができ、愛想がよく、相手を気持ちよくできる人が最高です。楽しくお話しすることで、お互いにwin-winの関係を構築しましょう。</dd>

                <dt>■話が聞ける</dt>
                <dd>あまり喋ることが得意でない方も、聞き上手なら大丈夫です。人間誰しも自分の話を聞いてもらえれば嬉しいもの。聞き上手な人は大変喜ばれます。</dd>

                <dt>■空気が読める</dt>
                <dd>どんな場面でも空気を読めることは大切ですよね。（飲む場面、落ち着いて話す場面、楽しませる場面など、その場面のTPOを理解できることです）</dd>

                <dt>■お酒が飲める</dt>
                <dd>お酒は飲めないより飲める方が、お相手できる方の幅が広がります。もちろん飲めなくてもOK。何よりその場の雰囲気を一緒に楽しめる方が大切ですね。</dd>
              </UnderstandMobileClubTextList>
            </dd>

            <dt>こんなメリット?</dt>
            <dd>
              <p>お小遣いが稼げるだけじゃないこんなメリットもあるのがモバクラです。</p>
              <p>富裕層や経営者などとお知り合いになれます。<br/>
              名だたる大企業の社長や、新進気鋭のベンチャー経営者などが多く利用されていますので、普段は出会うことのできない方々との交流があります。</p>
              <p>普段の生活ではなかなか聞くことができない、社会勉強の場でもあります。</p>
              <p>またモバクラ独自の取り組みである「リアルの優良高級Club店からのスカウトメール」で採用されれば収入が限りなく安定します。</p>
              <p>Webだけ、リアルのClub店との掛け持ちなど、あなたに合わせた働き方で収入を増やすことができます。</p>
            </dd>
          </UnderstandMobileClubList>
        </section>
      </MainCover>

      <Footer>
        <FooterTitle>Mobile Club</FooterTitle>
        <SnsIconCover>
            <li><img src={TwitterIcon} alt=""></img></li>
            <li><img src={FacebookIcon} alt=""></img></li>
            <li><img src={InstagramIcon} alt=""></img></li>
        </SnsIconCover>

        <CopyrightCover>© Copyright 2020. All rights reserved.</CopyrightCover>
      </Footer>
    </Container>
  )
}