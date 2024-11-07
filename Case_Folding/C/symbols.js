module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))