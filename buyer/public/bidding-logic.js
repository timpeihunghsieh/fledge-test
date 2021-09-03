function generateBid(
    interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals,
    browserSignals) {
  const ad = interestGroup.ads[0];
  return {'ad': 'example',
          'bid': ad.metadata.bid,
          'render': ad.renderUrl};
}

function reportWin(
  auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
  console.log(browserSignals.interestGroupOwner + "/report-win");

  sendReportTo(browserSignals.interestGroupOwner + "/report-win");
}