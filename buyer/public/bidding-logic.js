function log(label, o) {
    console.log(label, JSON.stringify(o, " ", " "))
}

function generateBid(
    interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals,
    browserSignals) {
  log("generateBid", { interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals })

  const ad = interestGroup.ads[0];
  const adComponent1 = interestGroup.adComponents[0];
  const adComponent2 = interestGroup.adComponents[1];

  return {'ad': 'example',
          'bid': ad.metadata.bid,
          'render': ad.renderUrl,
          'adComponents': [adComponent1.renderUrl, adComponent2.renderUrl]};
}

function reportWin(
  auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {

  log("reportWin", { auctionSignals, perBuyerSignals, sellerSignals, browserSignals })


  const buyerReportWinUrl = browserSignals.interestGroupOwner + "/report-win";
  console.log("Calling buyer's reportWin(). " + buyerReportWinUrl);
  sendReportTo(buyerReportWinUrl);
}
