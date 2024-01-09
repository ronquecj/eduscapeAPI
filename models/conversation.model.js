import mongoose from 'mongoose';

const { Schema } = mongoose;

const ConversationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    readBySeller: {
      type: Boolean,
      required: true,
    },
    readByBuyer: {
      type: Boolean,
      required: true,
    },
    lastMessage: {
      type: String,
      required: false,
    },
    sellerName: {
      type: String,
      required: true,
    },
    sellerImg: {
      type: String,
      required: true,
    },
    buyerName: {
      type: String,
      required: true,
    },
    buyerImg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Conversation', ConversationSchema);
