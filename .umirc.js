
export default {
  plugins: [
    'umi-plugin-dva',
    [
      'umi-plugin-routes',
      {
        exclude: [
          /constant\.(j|t)sx?$/,
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /constants\//,
          /models\//,
          /components\//,
          /services\//,
          /chart\/Container\.js$/,
        ],
      },
    ],
    [
      'umi-plugin-dll',
      {
        exclude: [],
        include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"],
      },
    ],
  ],
}
