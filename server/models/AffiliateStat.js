import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    // Users Ids reference the Users model
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    // Affiliate Ids reference the Ids in the Transaction model
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;
