import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthdate: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: false,
    },
    gmail: {
      type: String,
      required: false,
    },
    linkedin: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    resume: {
      type: String,
      required: false,
    },
    validID: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    gcashQR: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema);
