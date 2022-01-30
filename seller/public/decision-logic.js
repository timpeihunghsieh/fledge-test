function log(label, o) {
    console.log(label, JSON.stringify(o, " ", " "))
}

function scoreAd(
    adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
  log("scoreAd", { adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals })
  return bid;
}

function reportResult(auctionConfig, browserSignals) {
  log("reportResult", { auctionConfig, browserSignals })

  const sellerReportUrl = auctionConfig.seller + '/report-result?everything';
  console.log("Calling seller's reportResult(). " + sellerReportUrl);
  sendReportTo(sellerReportUrl);

  return {
    'success': true,
    'signalsForWinner': {'signalForWinner': 1},
    'reportUrl': 'https://somewhere/test/td/seller/report_url',
    'arbitrary_seller_defined_key': 'arbitrary_seller_defined_val'
  };
}
