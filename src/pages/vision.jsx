import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import mediaquery from '../../assets/styles/variable';
import '../../assets/styles/reset.css';

import Header from '../components/header';

import NoImage from '../../assets/images/vision/no-image.png';
import TwitterIcon from '../../assets/images/sp/twitterIcon.png';
import FacebookIcon from '../../assets/images/sp/facebookIcon.png';
import InstagramIcon from '../../assets/images/sp/instagramIcon.png';

const Container = styled.div`
  position: relative;
  width: 378px;
  margin: 0 auto;
`

// Main
const HeaderText = styled.div`
  font-family: YuMincho;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
  color: #fff;
  backdrop-filter: blur(4px);
  background: #ffaeb3;
`

const MainCover = styled.main`
`

// Top
const TopImageCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px;
`

// vidion内容
const VisionListCover = styled.dl`
  &:not(:first-of-type) {
    margin-top: 60px;
  }

  &:last-of-type {
    margin-bottom: 60px;
  }

  > dt {
    margin-bottom: 35px;
    font-family: YuMincho;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    text-decoration-line: underline;
    color: #ff444f;
    mix-blend-mode: normal;
    text-align: center;
  }

  > dd {
    width: 256px;
    margin: 0 auto;
    font-family: YuMincho;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 27px;
    
    > p {
      &:not(:first-of-type) {
        margin-top: 14px;
      }

      > span {
        font-weight: bold;
      }
    }
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

export default function Home() {
  return (
    <Container>
      <Header />

      <MainCover>
        <HeaderText>〜私達の理念〜</HeaderText>

        <TopImageCover>
          <div><img src={NoImage} alt=""></img></div>
        </TopImageCover>

        <VisionListCover>
          <dt>新型コロナウイルス後の<br />
          日本の水商売世界を予想する</dt>
          <dd>
            <p>ロシアの革命家のウラジーミル・イリイチ・レーニンはこう言いました。</p>
            <p>「<span>何十年もなにも起こらないことがあるが、数週間のうちに数十年分が起きることもある</span>」</p>
            <p>未来に投資する私達Mobile Clubの仕事は、どのように社会が進化するのか、そして有意義な変化をもたらせるような起業機会がどこにあるのかをつきとめることです。最終的には、未来をどのように作っていくかは勇気ある創業者たちの行動次第です。私たちは大きな「波」がどこにあるのかを探しますが、実際に波に乗るのはサーファーである創業者自身と考えます。</p>
          </dd>
        </VisionListCover>

        <VisionListCover>
          <dt>ポスト・コロナ時代の逆都市化<br />
          に対応する水商売を構築する</dt>
          <dd>
            <p>何世紀にもわたって、都市化は世界中でかなり一貫したトレンドとして進んできました。距離によって発生するコストを減らそうとした結果、人口密度は上がりました。同じ場所で生活し、働き、買い物をし、遊ぶことは、実用的かつ経済的だからです。大阪北新地という街の密度とそのトレンドも、その過去からの集大成です。</p>
            <p>しかし、ここ数十年においては、テクノロジーの進化によって距離のコストは減少傾向にあります。リモートで働き、ネットで商品を注文し、ネットで医師の診察を受け、男女間の出会いもスマホがあれば簡単に楽しめることなどは既に広がっています。特にどこに行くかを決めるときの基準として、最もよく挙げられるのが職場との距離です。</p>
            <p>ほとんどの仕事がリモートでできるなら、職場との距離はそこまで気になりません。しかし、毎日通勤しなければならない場合、職場の近さはかなり重要です。では、もし週に一回しか職場に行かなくて良いとしたら？それでもあなたは同じ場所に行き続けますか？</p>
            <p>住居であれば、今より遠くて、安くて、自然が多い場所に住むことを選ぶかもしれません。</p>
            <p>ほとんどのコミュニケーションはチャットやメールで済ませられますし、大事なディスカッションはビデオ会議で行えます。男女の出会いであればその空いた時間を使い何処で会おうが自由になります。</p>
            <p>もちろん、インターネットを活用したこれらのソリューションは、何年も前から存在しています。それでも、大都市は変わらず魅力的に感じられ、ほとんどの人たちはストレスフルな通勤を続けています。なぜなら、社会システムに対する「ショック」でも起きない限り、古くからの習慣や社会的構造はゆっくりとしか変化しないからです。</p>
            <p>新型コロナウイルスがまさにそのショックです。コロナウイルスの強制力によって、日々の生活をなんとか続けていくために、何十億もの人たちがテクノロジーを使うことを余儀なくされています。こうしたテクノロジーを使うことは、もはやオプションではなく必須です。新型コロナウイルスはリモートワークを主流にするきっかけとなっています。</p>
            <p>もしそうなった場合、人々の住む場所や働き方、遊びの決め方にも大きく影響し、今後10年に及ぶ逆都市化トレンドの引き金になるかもしれません。</p>
            <p>逆都市化によって、現在使われているインターネット・サービスの多くが活性化するでしょう。それだけではなく、新たな分野でのテクノロジーの開発や法整備も加速するでしょう。遠隔医療に対する法的ハードルが下げられるかもしれませんし、バーチャル・リアリティもやっと誇大広告から実用化へと進むかもしれません。</p>
            <p>新型コロナウイルスは、これまでの習慣や社会常識を、根本から見直すことを私たちに迫っています。</p>
            <p>これはただのショックではなく、まるで壮大な規模の実験です。</p>
            <p>この困難な時期を、私たちMobile Clubは、<span>新しい考え方や生き方</span>を実現できるように考えます。</p>
            <p>そして、逆都市化の中でも北新地の水商売(クラブ、ラウンジ店)の<span>歴史を守り、</span>その根幹である「<span>もてなし</span>」<span>の心</span>を北新地から日本全体の都市に継承することを目的としています。</p>
          </dd>
        </VisionListCover>
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