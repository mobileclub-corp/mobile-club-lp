import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import mediaquery from '../../assets/styles/variable';
import '../../assets/styles/reset.css';

import Header from '../components/header';
// sp用画像
import TopImage from '../../assets/images/sp/top-lp.png';
import FourRunkImage from '../../assets/images/toMan/4runk.png';
import StepImage_01 from '../../assets/images/toMan/step01.png';
import StepImage_02 from '../../assets/images/toMan/step02.png';
import StepImage_03 from '../../assets/images/toMan/step03.png';
import CurrentBackgroundImage from '../../assets/images/toMan/currentBackground.png';
import NoImage from '../../assets/images/toMan/no-image.png';
import DummyImage from '../../assets/images/toMan/dummy.png';
import SecurityIcon from '../../assets/images/toMan/securityIcon.png';
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
  z-index: 2;
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

const IntroductionCover = styled.div`
  max-width: 375px;
  margin: 60px auto 0;
`

const IntroductionTitle =styled.h3`
  color: #FF444F;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-align: center;
`

const IntroductionDescriptionCover = styled.dl`
  text-align: center;

  > dt {
    font-size: 30px;
    font-weight: 600;
    font-family: YuMincho;
    line-height: 45px;
  }

  > dd {
    margin: 20px auto;
    line-height: 24px;
    font-size: 16px;

    &:not(:first-of-type){
      margin: 40px auto;
    }

    > p {
      text-align: left;
    }
  }
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

const AboutStepCover = styled.dd`
  ${mediaquery.desktop`
    display: flex;
    justify-content: space-between;
    width: 804px;
    margin: 0 auto;
  `}
`

const AboutStep = styled.div`
  margin: 20px 0;

  > figcaption {
    margin: 10px 0;
    line-height: 24px;
  }
`

const NoDeaikeiCover = styled.div`
  display: flex;
  justify-content: center;
`

const NoDeaikei = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 345px;
  height: 176px;
  padding: 26px 30px;
  background: #ff7d85;
  box-shadow: 4px 4px 0px #FF444F;
  border-radius: 12px;
  box-sizing: border-box;

  > dt {
    color: #fff;
    font-family: YuMincho;
    font-weight: 800;
    font-size: 22px;
    line-height: 33px;
  }

  > dd {
    margin-top: 14px;
    color: #fff;
    font-family: YuGothic;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }

  > p {
    margin-bottom: 20px;
  }
`

const CurrentCover = styled.div`
  position: relative;
  top: -12px;
  z-index: -1;
  padding: 74px 15px;
  background-image: url(${CurrentBackgroundImage});
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 45px 118vw;
    border-color: transparent transparent #fff transparent;
  }
`

const CurrentDescriptionCover = styled.dd`
  ${mediaquery.desktop`
    display: flex;
    justify-content: space-between;
  `}
`

const CurrentDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:first-of-type) {
    margin-top: 20px;
  }

  > figure {
    margin: 30px 0 13px;
  }

  > figcaption {
    margin-bottom: 6px;
    font-weight: bold;
  }

  > p {
    width: 250px;
    font-family: YuGothic;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: left;
  }
`

const MissionDescription = styled.dd`
  font-family: YuGothic;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
`

const MissionCover = styled.div`
  margin: 20px 18px;
`

const MissionStepDescription = styled.dl`
  > div {
    position: relative;
    margin-bottom: 40px;

    > dt {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      font-family: Poppins;
      font-weight: normal;
      font-size: 34px;
      line-height: 51px;
      color: #ff444f;
    }
  
    > dd {
      padding: 20px;
      font-family: YuGothic;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: left;
      background: #ffeaeb;
      box-sizing: border-box;
      border-radius: 6px;
  
      > span {
        font-family: YuGothic;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #ff444f;
      }
    }
  }
`

const DummyImageCover = styled.div`
  max-width: 345px;
  height: 180px;
  margin: 10px auto 30px;
  background-image: url(${DummyImage});
  background-repeat:  no-repeat;
`

const MazuwaKaiintourokuButtonCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 345px;
  height: 186px;
  padding: 20px;
  box-sizing: border-box;
  background: #ff7d85;
  box-shadow: 4px 4px 0px #ff444f;
  border-radius: 12px;

  > p {
    font-family: YuGothic;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }
`

const PromotionCover = styled.div`
  // height: 428px;
  padding: 60px 15px;
  // background: #f8f7f3;
  // box-sizing: border-box;
`

const SecurityCover = styled.div`
  height: 272px;
  padding: 40px 15px;
  background: #ffeaeb;
  box-sizing: border-box;
`

const SecurityIconCover = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 12px;
`

const SecurityDescriptionCover = styled.dl`
  > dt {
    font-family: YuMincho;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
  }

  > dd {
    margin-top: 16px;
    font-family: YuGothic;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
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
  z-index: 3;

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

export default function ToMan() {
    return (
      <Container>
        <Header />
        <FollowLineButton>
          <FollowLineButtonTop>LINEから簡単応募してみる</FollowLineButtonTop>
          <FollowLineButtonBottom><a href="https://line.me/R/ti/p/@842zcnjv" target="_blank" rel="noreferrer noopener">LINE＠ 友達追加</a></FollowLineButtonBottom>
        </FollowLineButton>

        <main>
            <TopCover>
                <TopTitleCover>
                    <h1>Mobile Club<br/>
                    ワンランク上の稼ぎ方<br/>
                    <span>出店×ホステスマッチングサービス</span></h1>
                </TopTitleCover>

                <TopTextCover>＼2020.11.15リリース予定／</TopTextCover>

                <LineAddCover>
                    <LineAddText>まずは<span>LINE@友達追加</span>をしましょう！</LineAddText>
                    <LineAdd><a href="https://line.me/R/ti/p/@842zcnjv" target="_blank" rel="noreferrer noopener">LINE＠ 友達追加</a></LineAdd>
                </LineAddCover>
            </TopCover>

            <IntroductionCover>
            <div id="about">
                <IntroductionTitle>ABOUT</IntroductionTitle>
                <IntroductionDescriptionCover>
                <dt>北新地モバイルって？</dt>
                <dd>ホステスとお客様を繋ぎ上質な空間と<br/>
                時間をご提供するシステムです。<br/>
                お好みの女性、飲食店を選んで、<br/>
                素敵なひと時をご堪能ください。</dd>
                <HowToEarnCover>
                  <HowToEarn>
                    <div><img src={FourRunkImage} alt=""></img></div>
                  </HowToEarn>
                </HowToEarnCover>
                <AboutStepCover>
                    <AboutStep>
                    <figure><img src={StepImage_01} alt=""></img></figure>
                    <figcaption>気になる女性を選択</figcaption>
                    </AboutStep>

                    <AboutStep>
                    <figure><img src={StepImage_02} alt=""></img></figure>
                    <figcaption>お好きな飲食店を指定</figcaption>
                    </AboutStep>

                    <AboutStep>
                    <figure><img src={StepImage_03} alt=""></img></figure>
                    <figcaption>指定した場所で待ち合わせ</figcaption>
                    </AboutStep>
                </AboutStepCover>
                <NoDeaikeiCover>
                    <NoDeaikei>
                    <dt>出会い系サイトじゃないの？</dt>
                    <dd>出会い系サイトではありません。<br/>
                    いわばお店を持たず、ネット上で経営する<br/>
                    クラブ&キャバクラです。</dd>
                    </NoDeaikei>
                </NoDeaikeiCover>
                </IntroductionDescriptionCover>
            </div>

            <CurrentCover id="current">
                <IntroductionTitle>CURRENT</IntroductionTitle>
                <IntroductionDescriptionCover>
                <dt>コロナの影響でホステスさんが困っています</dt>
                <CurrentDescriptionCover>
                    <CurrentDescription>
                    <figure><img src={NoImage} alt=""></img></figure>
                    <figcaption>某高級クラブ ホステス シングルマザー</figcaption>
                    <p>20歳の時から銀座のクラブで働いています。10代で未婚で子供を産んで、子育てしながら働いてきました。この世界、シンママ率が高く子育てに関して助け合ったりする環境が整っているんです。売上を持っているような一部のホステスは別として、一般のホステスの稼ぎは世の中で思われてるほどよくありません。自粛明けも私たちのような売上のないホステスは出勤が規制されて、以前の収入の半分以下になり、違法な性風俗店に流れている同僚もいます。うちの店も性産業関係は御法度なんですが、食べていかなきゃいけないので、、、目を瞑っています。</p>
                    </CurrentDescription>

                    <CurrentDescription>
                    <figure><img src={NoImage} alt=""></img></figure>
                    <figcaption>某ラウンジのオーナー</figcaption>
                    <p>オイルショックやバブルなど全部経験し何度も苦しい状況を乗り越えてきましたが、こんなにひどいのは初めてです。感染防止の対策を取っていますが、酷かったときは売り上げが以前の80％から90％ほど減少してしまって、今も半分以下です、感染が収まらないとこれ以上経営を続けられないです。</p>
                    </CurrentDescription>

                    <CurrentDescription>
                    <figure><img src={NoImage} alt=""></img></figure>
                    <figcaption>某高級クラブ　オーナーママ</figcaption>
                    <p>私達は基本的に通常の融資も受けられません。初めて国から保証をいただき、初めて人として認められたような気がしました。本当に感謝しています。ですが、それでも尚厳しい状況は続いています｡景気が悪いときはこれまでもありましたが私たちが頑張ることを､誰かに止められはしなかったので･･利益がギリギリ出るという売り上げラインは、月に約7000万円ほど｡しかし､営業を自粛してからは売り上げが消滅｡家賃は約600万円｡従業員への給料や諸経費も約600万円かかり､月1200万円ほどの支出だけが2か月続いています｡今も月の売上は戻らず赤字が続いています。</p>
                    </CurrentDescription>
                </CurrentDescriptionCover>
                </IntroductionDescriptionCover>
            </CurrentCover>

            <MissionCover id="mission">
                <IntroductionTitle>MISSION</IntroductionTitle>
                <IntroductionDescriptionCover>
                <dt>私たちの使命</dt>
                <MissionDescription>Mobile Club は、「もてなし」の心をもった女性とその人となりを知る人間味ある男性とのMeeting Plaiceです。 私達のサイトでは、コロナ禍で混迷するプロの「水商売」経験者の方も大歓迎です。 なぜなら、「水商売」のいわれはこのサイトが求める「もてなし」の起源があるからです。 水商売とは、水に倣への喩われ通り</MissionDescription>
                <dd>
                    <MissionStepDescription>
                    <div>
                        <dt>01</dt>
                        <dd>人は、水の柔軟性に倣え。(Flexibility) 水は、四角くも丸くも不満も言わず姿形を変えることができる。<br/>
                        <span>人であれば、万人と語らえること。</span>
                        </dd>
                    </div>

                    <div>
                        <dt>02</dt>
                        <dd>人は、水の強さに倣え。(Strength of mind) 水は、滝に落とせば硬い石をも砕くことができる。<br/>
                        <span>人であれば、時に意思硬く頼もしいこと。</span>
                        </dd>
                    </div>

                    <div>
                        <dt>03</dt>
                        <dd>人は、水の包容力に倣え。(Tolerance) 水は、清流から湖畔に辿りつけば清らかである。<br/>
                        <span>人であれば、他の人に癒しの心根をもつこと。</span>
                        </dd>
                    </div>
                    </MissionStepDescription>
                </dd>
                <MissionDescription>
                    <DummyImageCover></DummyImageCover>
                    <p>私達は、最良の心をもつ人達の巡り合いの場所としてMobile Club を創設いたしました。<br/>
                    この 3つの水、「もてなし」の起源を理解してくださる方ならどなたも大歓迎です。<br/>
                    現在、さまざまな良縁の場面(サイト)がありますが、私たちはコロナ禍で混迷する社会に光をかざすことを目的としています。<br/>
                    そしてこの巡り合わせが皆さんの元気となり、更に全国各地区繁華街の活性化に繋がること。<br/>
                    「三水」と「三蜜」のマナーをもって、コロナ渦に耐え未来に繋がるサイトとなること念じています。</p>
                </MissionDescription>
                </IntroductionDescriptionCover>

                <MazuwaKaiintourokuButtonCover>
                <LineAddText>女性の方も、まずは、<span>LINE@友達追加</span>して皆で 「自分みがき」と「地域活性化」の未来に参加しましょう。</LineAddText>
                <LineAdd><a href="https://line.me/R/ti/p/@842zcnjv" target="_blank" rel="noreferrer noopener">LINE＠ 友達追加</a></LineAdd>
                </MazuwaKaiintourokuButtonCover>
            </MissionCover>

            <PromotionCover id="promotion">
                {/* <IntroductionTitle>MISSION</IntroductionTitle>
                <IntroductionDescriptionCover>
                <dt>プロモーション映像</dt>
                <dd>
                    <video></video>
                </dd>
                </IntroductionDescriptionCover> */}
            </PromotionCover>

            <SecurityCover>
                <SecurityIconCover><img src={SecurityIcon} alt=""></img></SecurityIconCover>
                <SecurityDescriptionCover>
                <dt>安心のセキュリティ対策</dt>
                <dd>安全にご利用いただくために、業界最先端のセキュリティ対策で、ユーザーの情報を保護します。</dd>
                </SecurityDescriptionCover>
            </SecurityCover>
            </IntroductionCover>
        </main>

        <Footer>
          <FooterTitle>Mobile Club</FooterTitle>
          <SnsIconCover>
            <li>
              <a target="_blank" href="https://twitter.com/mobileclub_corp">
                <img src={TwitterIcon} alt=""></img>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/MobileclubOfficial">
                <img src={FacebookIcon} alt=""></img>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/mobileclub_corp">
                <img src={InstagramIcon} alt=""></img>
              </a>
            </li>
          </SnsIconCover>

          <CopyrightCover>© Copyright 2020. All rights reserved.</CopyrightCover>
        </Footer>
      </Container>
    )
}