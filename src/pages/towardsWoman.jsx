import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaquery from '../../assets/styles/variable';
import '../../assets/styles/reset.css';

import TopImage from '../../assets/images/sp/top-lp.png';
import FiveReasonImage from '../../assets/images/sp/5reason.png';
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
  font-family: Roboto;
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
  color: #fff;
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

const NewTextCover = styled.dl`
  display: flex;
  width: 233px;
  margin: 0 auto;

  > dt {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
    margin-right: 7px;
    background: #F88A92;
    border-radius: 4px;
    font-family: Hiragino Kaku Gothic Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    color: #fff;

  }

  > dd {
    font-family: Hiragino Kaku Gothic Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 130.2%;
    color: #F88A92;
  }
`

// モバクラはどんなサービス?
const WhatsMobileClubCover = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0;
  color: #000;
  background: #ffeaeb;

  > h2 {
    margin-bottom: 5px;
    font-family: Hiragino Kaku Gothic Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 39px;
  }
`

const WhatsMobileClubText = styled.div`
  width: 320px;
  font-family: Hiragino Kaku Gothic Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  
  > p:not(:first-of-type) {
    margin-top: 14px;
  }
`

// モバクラでのキャストの稼ぎ方
const HowToEarnCover = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 28px;
  text-align: center;
  background-color: #f8a6ae;

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
  height: 225px;
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
    font-size: 26px;
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

// モバクラが選ばれる5つの理由
const FiveReasonsCover = styled.section`
  display: flex;
  justify-content: center;
  padding: 144px 0 0;
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

export default function TowardsWoman() {
  return (
    <Container>
      <FollowLineButton>
        <FollowLineButtonTop>LINEから簡単応募してみる</FollowLineButtonTop>
        <FollowLineButtonBottom><a href="/https://line.me/R/ti/p/@842zcnjv" target="_blank" rel="noreferrer noopener">LINE＠ 友達追加</a></FollowLineButtonBottom>
      </FollowLineButton>

      <MainCover>
        <TopCover>
          <TopTitleCover>
            <h1>Mobile Club<br/>
            ワンランク上の稼ぎ方<br/>
            <span>ホステスマッチングサービス</span></h1>
          </TopTitleCover>

          <TopTextCover>＼月10万円の給料保証実施中／</TopTextCover>

          <LineAddCover>
            <LineAddText>まずは<span>LINE@友達追加</span>をしましょう！<br/>
            チャット内から面談日程の調整を行います♪</LineAddText>
            <LineAdd><a href="https://line.me/R/ti/p/@842zcnjv" target="_blank" rel="noreferrer noopener">LINE＠ 友達追加</a></LineAdd>
            <NewTextCover>
              <dt>NEW</dt>
              <dd>Zoom面談も可能です。</dd>
            </NewTextCover>
          </LineAddCover>
        </TopCover>
        <WhatsMobileClubCover>
          <h2>モバクラはどんなサービス?</h2>
          <WhatsMobileClubText>
            <p>モバクラは、ホステスさんとお客様をオンライン上で結ぶマッチングサービスです。<br/>
          予約から決済までをサービス上で行い、お好きな飲食店でお食事をお楽しみください。</p>
          <p>またモバクラ独自の取り組みである「リアルの優良高級Club店からのスカウトメール」が届きます。</p>
          <p>Webだけ、リアルのClub店との掛け持ちなど、あなたに合わせた働き方で収入を増やすことができます。</p>
          </WhatsMobileClubText>
        </WhatsMobileClubCover>
        <HowToEarnCover>
          <h2>モバクラでの<br/>
          \キャストの稼ぎ方/</h2>
          <HowToEarnList>
            <li>1回の同伴：最大3万円<br/>
            <span>(2時間半)</span></li>
            <li>延長料金：5,000円<br/>
            <span>(1時間)</span></li>
          </HowToEarnList>
        </HowToEarnCover>
        <FiveReasonsCover>
          <div><img src={FiveReasonImage} alt=""></img></div>
          {/* <h2>モバクラが選ばれる<span>5つの理由</span></h2>
          <dl>
            <dt><span>1</span>安心の決済システム</dt>
            <dd>現金やり取り不要！<br/>
            サービス上で決済まで完了するため、面倒なやり取りは発生しません。</dd>

            <dt><span>2</span>審査制</dt>
            <dd>厳正な審査の上キャストを採用させていただいております。<br/>
            写真が悪用されたり、身バレしたりする心配もありません。</dd>

            <dt><span>3</span>利用者は高年収層</dt>
            <dd>ゲストは審査制で、ゆとりのある経営者・富裕層等の高年収層が中心です。</dd>

            <dt><span>4</span>スカウト機能</dt>
            <dd>モバクラに登録していただいている優良高級Club店からスカウトメッセージが届きます。<br/>
            あなたに合わせたWebとリアル高級Club店とのやりがいのある働き方をご提供させていただきます。</dd>

            <dt><span>5</span>月10万円の給料保証</dt>
            <dd>ご登録から3ヶ月間、月10万円の給与保証をさせていただきます。<br/>
            稼げるか不安な未経験の方でも安心。
            <span>※ただし、登録後3ヶ月内に一切の店外同    伴実績がない方には給与保証はできかねます。</span></dd>
          </dl> */}
        </FiveReasonsCover>
        <EasyLineAddCover>
          <EasyLineAddTop>今すぐ簡単応募！</EasyLineAddTop>
          <EasyLineAddBottom>
            <LineAddText>まずは<span>LINE@友達追加</span>をしましょう！<br/>
            チャット内から面談日程の調整を行います♪</LineAddText>
            <LineAdd>LINE@ 友達追加</LineAdd>
            <NewTextCover>
              <dt>NEW</dt>
              <dd>Zoom面談も可能です。</dd>
            </NewTextCover>
          </EasyLineAddBottom>
        </EasyLineAddCover>
        <section>
          <UnderstandMobileClubTitle>より詳しくモバクラを知りたい方へ</UnderstandMobileClubTitle>
          <UnderstandMobileClubList>
            <dt>コロナでお困りのあなたへ</dt>
            <dd>コロナ禍の影響で「お店で働けない、収入が減ってしまった」というホステスさん、その他の業種 の方で十分な接待能力を有する女性のために当サービスを立上げました。</dd>

            <dt>どのくらい稼げるの?</dt>
            <dd>
              <p>1回の同伴(2時間半)で¥30,000円から、チップや人気に応じて数万〜数十万くらいまでの幅があるのが一般的です。(一般的に"タク代飲み"や"ギャラ飲み"と同様以上の水準です。)</p>
              <p>1日に何件も周り、"ハシゴ"をすることで月収~万円を超える方もいます。</p>
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
                  <p>人気の人は毎日のように何件も呼ばれるようになったりします。</p>
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
                <dd>愛嬌がよく、人と楽しくお話ができて、相手を気持ちよくできる人が最高です。楽しくお話しすることで、お互いにwin-winの関係ができるのです。</dd>

                <dt>■話が聞ける</dt>
                <dd>あまり喋ることが得意でない人も、聞き上手なら大丈夫です。人間誰しも自分の話を聞いて欲しいもの。聞き上手な方は大変喜ばれます。</dd>

                <dt>■空気が読める</dt>
                <dd>どんな場面でも空気を読めることは大事ですよね。（飲む場面、落ち着いて話す場面、楽しませる場面など）</dd>

                <dt>■お酒が飲める</dt>
                <dd>お酒は飲めないより飲める方が、お相手できる方の幅が広がります。もちろん飲めなくてもOK。何よりその場の雰囲気を一緒に楽しめる方が大切ですね。</dd>
              </UnderstandMobileClubTextList>
            </dd>

            <dt>こんなメリット?</dt>
            <dd>
              <p>お小遣いが稼げるだけじゃないこんなメリットもあるのがモバクラ。</p>
              <p>富裕層や経営者などどお知り合いになれます。<br/>
              名だたる大企業の社長や、新進気鋭のベンチャー経営者などが多く使っているので、普段は出会うことのできない人々と出会うことができます。普段の生活ではなかなか聞くことができないような話を伺えます。</p>
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