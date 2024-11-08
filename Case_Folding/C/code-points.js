module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))