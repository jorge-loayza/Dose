exports.load = function(ffmpeg) {
    ffmpeg
    .withVideoCodec('h264_nvenc')
    .withVideoBitrate(1000)
    .withAudioCodec('libmp3lame')
    .outputOption([
      '-map 0:v',
      '-map 0:m:language:eng',
      '-sn',
      '-deadline realtime',
      '-lag-in-frames 0',
      '-static-thresh 0',
      '-frame-parallel 1',
      '-crf 4',
      '-vf scale=-1:360',
      '-movflags frag_keyframe+faststart',
      '-pix_fmt yuv420p'
    ])
    .outputFormat('mp4')
  };