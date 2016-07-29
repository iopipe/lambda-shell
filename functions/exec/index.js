var child_process = require('child_process')
var iopipe = require("iopipe")({
  debug: true,
  clientId: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImF1dGgwfDU3NjA2MDBhMzk5OTU1NGU2YWI4ZTg2OCIsInVzZXJuYW1lIjoiZXdpbmRpc2NoIiwiaWF0IjoxNDY5NTQwMjUyLCJhdWQiOiJodHRwczovL21ldHJpY3MtYXBpLmlvcGlwZS5jb20vZXZlbnQvIn0.oeGARaTczhJzTkx80N_Ctre0XsbGQxFxFzqw8jyFbwE"
})
exports.handle = iopipe(function(e, ctx, cb) {
  child_process.exec(e.command, {
    maxBuffer: 1024*1024*512
  }, (err, stdout, stderr) => {
    cb(err, stdout)
  })
})
