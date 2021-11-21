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
  const buyerReportWinUrl = browserSignals.interestGroupOwner + "/report-win";
  console.log("Calling buyer's reportWin(). " + buyerReportWinUrl);
  sendReportTo(buyerReportWinUrl);
}
