// pages/taskBox.js
Component({
  /**
   * Component properties
   */
  properties: {
    taskNumber: {
      type: Number,
      value: -1
    },
    taskName: {
      type: String,
      value: 'task'
    },
    emergent: {
      type: Boolean,
      value: false
    },
    checked: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    onFlip: function() {
      // console.log("in")
    },

    onDelete: function () {
      console.log(this.properties.taskNumber)
      var myEventDetail = {
        "id": this.properties.taskNumber,
      }
      var myEventOption = {}
      this.triggerEvent('ondelete', myEventDetail, myEventOption)
    },

    onCheck: function() {
      console.log(this.properties.taskNumber)
      var myEventDetail = {
        "id": this.properties.taskNumber,
      }
      var myEventOption = {}
      this.triggerEvent('oncheck', myEventDetail, myEventOption)
    }
  }
})
