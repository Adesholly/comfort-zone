const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      reqiured: true,
    },

    facilities: {
      type: String,
      required: true,
    },

    numberOfPerson: {
      type: Number,
      reqiured: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
    },

    rentPerDay: {
        type:   Number,
        required:   true,
    },

    imageURLS: [],

    currentBookings: [],

    category: {
      type: String,
      reqiured: true,
    },

    description: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;
