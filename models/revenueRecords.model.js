import mongoose from 'mongoose';

const { Schema } = mongoose;

const RevenueRecordsSchema = new Schema(
  {
    gigData: {
      type: Object,
      required: true,
    },
    buyerData: {
      type: Object,
      required: true,
    },
    sellerData: {
      type: Object,
      required: true,
    },
    referenceNumber: {
      type: String,
      required: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('RevenueRecords', RevenueRecordsSchema);
