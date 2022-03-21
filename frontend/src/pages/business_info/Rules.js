
import React, { useEffect } from "react";
import { fetchLotss } from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Box, Container, styled } from "@mui/material";

import Navbar from "../../components/navbar/Navbar";
import Section12 from "../../components/superstore-shop/Section12";

export default function AboutUs() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  useEffect(() => {
    if (isAuthenticated !== null) {
      dispatch(
        fetchLotss({
          isAuthenticated,
          auctionsID: "fdfa3b15-1731-43fc-b23e-30c1707b954c",
        })
      );
    }
  }, [dispatch, isAuthenticated]);

  const InnerContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  }));

  return (
    <>
      <Navbar />
      
      <InnerContainer
        sx={{
          justifyContent: "left",
        }}
      >
        <Box >
         <h1>服务规则</h1>
          <p><h2>总则</h2></p>
            <p>第一条 本公司作为买卖双方之代理人，应为双方提供服务和平台（但对买家或卖家的任何违约行为不承担任何责任）。</p>
            <p>第二条 参加本公司拍卖活动的卖家或买家必须仔细阅读以下之条款，以维护权益。</p>
            <p>第三条 如果对任何参拍物的所有权有异议，必须于拍卖之前提出司法单位书面证明，由本公司接洽及说明，否则一概不予受理。</p>
            <p>第四条 濒危物种的拍卖有严格的限制，这包括但并不仅限于骨（鲸骨等等）制品，象牙，龟甲，海豹皮，犀牛角还有其它任何在大多数国家有严格限制或禁止的动物部件。</p>
          <p><h2>关于买方</h2></p>
            <p>第五条 参加拍卖的买家应在拍卖会举行前亲自向本公司登记，买家应提供真实的相关资料，并授权本公司向银行索取买家的财务信用资料，并取得竞投号码入场。</p>
            <p>第六条 委托本公司协助拍卖的买家，应于拍卖活动开始前24小时与本公司签订委托拍卖表，并支付保证金，如有成交，余款应在竞投成功后10日内一次付清。</p>
            <p>第七条 拍卖进行中举牌者不得撤回，本公司认定出价最高者获得购买权。</p>
            <p>第八条 本公司具有完全决定权拒绝任何人进入拍卖场地或参与拍卖（与竞标者的信用有关），亦可拒绝接受任何竞投。</p>
            <p>第九条 买家应提早于预展期内，亲自到会场仔细审查拍卖品原件，选定参拍项目，并对自己竞投拍卖品的行为承担法律责任。本公司就任何拍卖品及拍卖证明文件之真伪，均不对买家作任何保证。</p>
            <p>第十条 许多拍卖品基于其年代或性质，使其未能有完美的状况，本公司可提供拍卖品的状况报告，图录或状况报告中未说明拍卖品之状况并不表示该拍卖品没有缺陷或瑕疵。</p>
            <p>第十一条 本公司对于委托人所委托拍卖的任何物品，依本公司与委托人所签订的委托拍卖合同书约定，进行拍照、图录出版介绍及展示。</p>
            <p>第十二条 本公司在拍卖日前编印之图录或以其它形式对任何拍卖品的作者、来历、年代、尺寸、质地、装裱、归属、真实性、出处、保存情况、估价等方面的介绍，仅供买家参考，本公司不做任何担保。</p>
            <p>第十三条 图录内拍卖品之描述仅作为指引，拍卖品之色彩和明暗度在印刷上或屏幕上看起来可能会与实体情况不同，其不作为任何拍卖项目之依据。</p>
            <p>第十四条 与拍卖品有关之一切影像、图示与书面材料之相关知识产权（包括但不限于著作权、专利等），于任何时候均属于本公司之财产及所有，未经本公司同意，任何人不得使用。</p>
            <p>第十五条 凡欲现场参与、书面竞投、电话竞投及网上竞投者，须于拍卖前一天完成登记手续，并缴纳拟拍得最高金额的20%保证金方可参与竞投（若缴纳支票，请于三日前完成办理）。</p>
            <p>第十六条 若竞拍成功，保证金抵作购买款；若不成功，保证金将在拍卖结束后七个工作日内，全额无息退还；若违约或过期不交割，保证金将作为违约金，不予退还。</p>
            <p>第十七条 宝华拍卖向买家收取落槌价的20%作为服务费，买家应缴纳的总费用为落槌价加上服务费以及相应的加拿大税款。直接运出加拿大的物品可以获得税务豁免。安省的HST税率为13%，运到其他省的物品等税率以目的省为准。</p>
            <p>第十八条 买家成功竞得拍卖品，须于10日内付清全额购买款（包括落槌价、佣金以及相应的税款）之后取回拍卖品。本公司有权要求买家于拍卖后当日支付拍卖品成交价30%为定金，并于10日内一次付清余款，完成交付手续并取货。</p>
            <p>第十九条 买家付款可以现金、汇款、支票、借记卡（仅限加拿大买家）或信用卡(最高限额25,000加币）支付，如以支票付款，待支票兑现后，方可领取拍卖品。</p>
            <p>第二十条 本公司所有交易均以加币计价，任何加币以外的币种支付所发生的汇率交换费用以及手续费均由买家自己承担。</p>
            <p>第二十一条 本公司的拍卖价并不包括包装，如有向买家提供包装材料仅为一种免费服务，因此包装时对物品造成任何损坏概由买家自行负责。</p>
            <p>第二十二条 买家付清款项后，必须自行取货，若委托他人，需出示委托证明书；若委托本公司送货或需额外保险，均另行计价，对于运送过程中所造成的一切损失，本公司概不负责。</p>
            <p>第二十三条 买家付清全额款项后即对已购拍卖品负有全责，即便该拍卖品仍由公司保存，在保存过程中有任何毁损均由买家承担。</p>
            <p>第二十四条 买家成功竞投拍卖品后，未于拍卖后期限内付清款项的，视为违约，保证金不予退还，并承担相关责任。经本公司协商买卖双方同意的，不在此限。</p>
            <p>第二十五条 买家在拍卖成交日（含成交日）起10日仍未付款，本公司将每月在总付款金额上加收2%做为滞纳金，或者本公司有权取消此交易，买家付清全部款项之前对该物品没有拥有权。</p>
            <p>第二十六条 经卖家同意，本公司可再行拍卖或以其它方式出售该拍卖品，如重售价格低于原拍卖价时，可向原买家索偿差额。</p>
            <p>第二十七条 在将来的任何拍卖中，本公司可拒绝买家再次竞投或由他人代为竞投，或在接受其任何竞投之前，本公司有权向买家先收取高额保证金。</p>
            <p>第二十八条 本公司对于买家成功竞投的拍卖品，已付清并久不领取不负保管的责任，拍卖后30日起，须支付储存费用每件每周15加币。</p>
          <p><h2>关于卖方</h2></p>
            <p>第二十九条 本公司在公开拍卖会中，是卖家代理人身份，卖家的规定已详细列于卖家委托合同书中。</p>
            <p>第三十条 本公司有权平息及处理拍卖中任何争议。</p>
            <p>第三十一条 本公司有义务为交易双方保守秘密，以维护买卖双方及本公司的利益不受损害。</p>
            <p>第三十二条 为维护场内秩序，请勿吸烟，十岁以下儿童请勿入场。</p>
          <p><h2>竞拍规则</h2></p>
            <p>得知最新拍卖讯息</p>
            <p>最新的拍卖、活动、新闻资讯皆会公布于www.bhpm.ca上，建议您将本网站加入“我的最爱”随时回到本网站获得最新资讯。</p>
          <p><h2>保证金</h2></p>
            <p>为确保拍卖的圆满顺利以及拍卖者的权益，请所有参与现场拍卖、电话委托、书面委托以及网上拍卖者于拍卖前一天完成登记，并缴纳预计买入价值20%的定金（CAD$2000以下可以免交定金，但是仍需完成注册），定金可以是电汇，银行卡，信用卡，AlphaPay，远程信用卡请点击链接下载信用卡授权书。</p>
          <p><h2>付款方式</h2></p>
            <p>成功竞得拍卖品的买家应自拍定日起10日内付清全额款项（包含落槌价、拍卖佣金以及相应税款。付款可以现金、汇款、支票借记卡或信用卡（最高限额25,000加币）支付，如以支票支付，须待支票兑现后，方可领取拍卖品。所有价格均以加币结算，如果以其他币种支付，买家应自行兑换为加币。</p>
          <p><h2>领取拍卖品</h2></p>
            <p>买家在付清款项后，必须自行安排取货或运输。若委托他人，必须出示委托证明书，对于运输过程中所造成的一切损失，本公司概不承担责任。</p>
          <p><h2>拍卖品储存</h2></p>
            <p>拍卖后30日起，买家若未领取拍卖品，须支付储存费用。</p>
          <p><h2>拍卖品状况</h2></p>
            <p>请于拍卖预展时查看拍卖品，如有需要，宝华拍卖将提供拍卖品状况报告。图录或状况报告中未说明并不表示该拍卖品没有缺陷或瑕疵，详细参阅服务规则。</p>
          <br /><br />
        </Box>
      </InnerContainer>

      <Section12 />
    </>
  );
}