//import buildValidatorSummaryURL from "../../apis/beaconchaApi/buildValidatorSummaryURL";
import { expect } from "chai";
import { BeaconchaGetResponse } from "@stakingbrain/common";

describe("Test the building of a unique URL for all the validators", () => {
  it("should return a valid URL", () => {
    let allValidatorsInfo: BeaconchaGetResponse[] = [
      {
        status: "ok",
        data: [],
      },
      {
        status: "ok",
        data: [],
      },
    ];

    for (let i = 1; i <= 100; i++) {
      allValidatorsInfo[0].data.push({ validatorindex: 1 });
    }

    for (let i = 1; i <= 3; i++) {
      allValidatorsInfo[0].data.push({ validatorindex: i + 100 });
    }

    const network = "mainnet";
    /*const summaryValidatorURL = buildValidatorSummaryURL({
      allValidatorsInfo,
      network,
    });*/
    const summaryValidatorURL = "";
    //TODO
    expect(summaryValidatorURL).to.equal(
      "https://beaconcha.in/dashboard?validators=" +
        "1,".repeat(100) +
        "101,102,103"
    );
  });
});
