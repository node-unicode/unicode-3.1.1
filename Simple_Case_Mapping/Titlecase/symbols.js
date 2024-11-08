module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))