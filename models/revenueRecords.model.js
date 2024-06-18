import mongoose from 'mongoose';

const { Schema } = mongoose;

const RevenueRecordsSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    buyerName: {
      type: String,
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
