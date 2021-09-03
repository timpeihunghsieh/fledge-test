function generateBid(
    interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals,
    browserSignals) {

  console.log("trustedBiddingSignals:");
  console.log(JSON.stringify(trustedBiddingSignals));

  const ad = interestGroup.ads[0];
  return {'ad': 'example',
          'bid': ad.metadata.bid,
          'render': ad.renderUrl};
}

function reportWin(
  auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
  //sendReportTo("https://somewhere/reportWin?" + encodeURIComponent(JSON.stringify(browserSignals)));
}