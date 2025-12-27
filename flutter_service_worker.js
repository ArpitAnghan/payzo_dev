'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2ef22c4ea7cf68456378735de555d0bc",
"version.json": "834e1f2f76c3a4e564ba0195234c95e8",
"index.html": "8fd37c3066ca159cd9fcd5f6409285de",
"/": "8fd37c3066ca159cd9fcd5f6409285de",
"fetchDataFromExcel.js": "c0fe6701dcbe1e96c8b763019db960a2",
"main.dart.js": "731ffab80e076afd4b941fc98c71ab2e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "ff54efab18825076196bd66202742efa",
"icons/favicon-16x16.png": "c0730e7245ee64f202323672c43d68af",
"icons/favicon.ico": "b9bebe54810d0406b48cbf35409ec633",
"icons/apple-icon.png": "ecbfaba335e3a16f870481b25363d1fe",
"icons/apple-icon-144x144.png": "23f969ee210f68fd4368d186792947a0",
"icons/android-icon-192x192.png": "00194744ab57e899e628e386e8e721a5",
"icons/apple-icon-precomposed.png": "ecbfaba335e3a16f870481b25363d1fe",
"icons/apple-icon-114x114.png": "faa43c3c435c6430d84e6aabbb261d09",
"icons/ms-icon-310x310.png": "a5abfa2a97627b85d4a29cdd667505c0",
"icons/ms-icon-144x144.png": "23f969ee210f68fd4368d186792947a0",
"icons/apple-icon-57x57.png": "8f8e632614de8e9d37de011354e1bcda",
"icons/apple-icon-152x152.png": "ac4efbdab53379177d680e2d62864735",
"icons/ms-icon-150x150.png": "6a74b996eef1204796332a4b96ccefdd",
"icons/android-icon-72x72.png": "0cfa03c7108782e59ba0f2be41926505",
"icons/android-icon-96x96.png": "ced787b0d7a89cc25f069efd990a7c0f",
"icons/android-icon-36x36.png": "54cf0a2392df16e726fe1e49748fd648",
"icons/apple-icon-180x180.png": "207adde2949cd4440d49955a3abee92a",
"icons/favicon-96x96.png": "ced787b0d7a89cc25f069efd990a7c0f",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "143d1f8d36165bda670d42ada1961aa9",
"icons/apple-icon-76x76.png": "2cedca6976ce1bfb7d9529a8160c0424",
"icons/apple-icon-60x60.png": "8c3b1d3f564e7305f2ce307920b3ae88",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "23f969ee210f68fd4368d186792947a0",
"icons/apple-icon-72x72.png": "0cfa03c7108782e59ba0f2be41926505",
"icons/apple-icon-120x120.png": "4797ab98a960f9f50acbbf11e826b1b6",
"icons/favicon-32x32.png": "1975b0b519f11e81c41c18f11e9f7c22",
"icons/ms-icon-70x70.png": "d85816162276d2b3420b73c442d526a8",
"manifest.json": "1e81d9899e86dafae90149859f5f403e",
"assets/NOTICES": "9c63fa8c39e11686c0f86b0e271f1ef3",
"assets/FontManifest.json": "3a81f223f733772d2e941c0a74aba04b",
"assets/AssetManifest.bin.json": "9cf758bc848690bcac1618dd3556c56e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "af36b95ef7a3e2f389b89fafe09edac7",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/aad_oauth/assets/msalv2.js": "7fb1a65e14acf2e247a813225eed3ac8",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "277afb3ea3a5addd02dd131578a0b18c",
"assets/fonts/MaterialIcons-Regular.otf": "5bccf55b46d53ad92657a5996118716a",
"assets/assets/images/edit_new.svg": "7951a4c2f3c9479aacb4e83cfbba23e5",
"assets/assets/images/search.svg": "e3bd0ec4c7e6f1b3cb4e6da376c3ca44",
"assets/assets/images/notes.svg": "572907d227bb620ba6088ae4f092384f",
"assets/assets/images/sidebar_expand.svg": "ac7b50df57b57d315a18423f916c183c",
"assets/assets/images/bed.svg": "8ad9d5c7b7c825225700adfda0e1bfd1",
"assets/assets/images/icon_pdf.png": "793bf15d0e4b14b9e0d11d0de1789261",
"assets/assets/images/delete_dark_logo.svg": "a3a5a3e00a4d35bd9142c8b556248b78",
"assets/assets/images/information.svg": "5536e4093c977647f2f91324315a50f7",
"assets/assets/images/bulk_export.svg": "80ba5e06e33f0e1ac76b5910fea8e64b",
"assets/assets/images/icon_ppt.png": "6338ce65a973efd35cea4639cde5faed",
"assets/assets/images/clock-minus.svg": "ed419e5bb991aa3a288c05309594b704",
"assets/assets/images/list_view.svg": "4b639ee2fb0e061fa4a5f52f30967573",
"assets/assets/images/user_add.svg": "ff707e997a5c04282d4c256b39bec1a8",
"assets/assets/images/user.svg": "e16a39d6f4b838a57bdfbafafd46b4cc",
"assets/assets/images/id-badge.svg": "1716da50fbde9359518d2a2605f6a78d",
"assets/assets/images/home.svg": "eaa4ebe8f9ea21a484ab579b00bb5360",
"assets/assets/images/negative_icon.svg": "b73d300e309fb9967d64c78ecc2c3490",
"assets/assets/images/logout.svg": "8e07b6c42646b6c1da3b2cad8ac92fee",
"assets/assets/images/cancel.svg": "fe77a3b8a79e464bff36125126fa2245",
"assets/assets/images/ticket.svg": "ffd2ac19c9f257941a9d1a0550b8558c",
"assets/assets/images/rating_fill.svg": "a71e8ce0085a34985afe870dfb09bb06",
"assets/assets/images/mail-filled.svg": "44ac7af5e2ebf044fdb8ca30089eb7ae",
"assets/assets/images/file_type_pdf_white.svg": "2a43d0cba74afa0ab78b854a5aef2442",
"assets/assets/images/back_arrow.svg": "2cf5eed1d463339b6933a87926837086",
"assets/assets/images/alerts_error.svg": "a7ffae84064010ad5b3a1fd336db2ae8",
"assets/assets/images/totalunits.svg": "4b7f688a8172d82dfebb476daded4b9e",
"assets/assets/images/x.svg": "bcb79a795149c128e0d4820633e7258e",
"assets/assets/images/calendar-event.svg": "1daa4f159fb13b64a41514da445cd9be",
"assets/assets/images/link.svg": "56a70e65607cea5708b62ae585cbe935",
"assets/assets/images/building-community.svg": "9890f3ae9ee7b6ca2495f30b18b10a67",
"assets/assets/images/discount-check.svg": "4a5e8db5fbc6323e28619a3ce9e1820e",
"assets/assets/images/percentage.svg": "50159b78d45b621ec8fe58ffbd34fe24",
"assets/assets/images/currency-rupee.svg": "d1326451028167cc4d35efa5cc0a9917",
"assets/assets/images/icon_send.svg": "ffebfb0dcbddd590ebfb935a4029dacb",
"assets/assets/images/table_view.svg": "341b1ec8d2a06b472383e9a49cf16e70",
"assets/assets/images/icon_xls.png": "e8343955dd716734bad7d81e5072360e",
"assets/assets/images/building-skyscraper.svg": "efe93b307793b8460bf4631e86d585b3",
"assets/assets/images/month_view.svg": "8a362b3819e8d6d70a8bf570470d3a3e",
"assets/assets/images/user_assign.svg": "fcb7f3c0e48b5bd45e49b4776bd82d2b",
"assets/assets/images/file_type_pdf.svg": "28278ca1bf7fb3cba106ca9bd6dd960f",
"assets/assets/images/icon_attach_file.svg": "f9c1af8db984a7e9624211a6f68cbe9f",
"assets/assets/images/drawer_button.svg": "704bfc10dac75ee55323ed21593a9195",
"assets/assets/images/map-pins.svg": "007f66bdb76120b33cdab872f2e9ca78",
"assets/assets/images/arrow_up.svg": "d88db71d7b1728d18531129453f4a922",
"assets/assets/images/cake.svg": "29ee82b8c7d97801ec3b1a1c2e71838c",
"assets/assets/images/logout_logo.svg": "329bfc9c7cd184cede2a862aea9c7ca7",
"assets/assets/images/clock-down.svg": "6fedbf2b27534cee6042a2ea6b96fbbc",
"assets/assets/images/arrow_right.svg": "15c79c1055b8dfb6849b669719d3f8d3",
"assets/assets/images/icon_profile.svg": "2d93c74617b5256c77a2a223f8819eab",
"assets/assets/images/building-cancel.svg": "e6968ba922f721c9777676bfb0e8f96c",
"assets/assets/images/info.svg": "a90251309ec812744312586a79bb4564",
"assets/assets/images/icon_logout.svg": "20033c34d3ec712e174481abe05123a8",
"assets/assets/images/close.svg": "a62144a5ac41f312f6a459c6cc995f66",
"assets/assets/images/profile_edit.svg": "4e7be808c0608d133a46735bcc7d0781",
"assets/assets/images/copy.svg": "f7b31bc0dd7e732dec25e713df4c3664",
"assets/assets/images/reload.svg": "70909c4ff3f5c6b7099b61b1fd6c9d9d",
"assets/assets/images/refresh.svg": "cb7fa8e9a4472e8fe335f35e75c92fbc",
"assets/assets/images/info_circle.svg": "37ae7593353e055e4f6f5d16ca34806f",
"assets/assets/images/icon_notification.svg": "a985cb337144c3bfd07a7620ab3466d0",
"assets/assets/images/building-bank.svg": "56701855f66f9f3c91e3cae8257f0d96",
"assets/assets/images/setting.svg": "fca4da3a38b65203c215920c38aefb56",
"assets/assets/images/message.svg": "2bbfad9e9eb269bd65d64107cfca93da",
"assets/assets/images/brand-whatsapp.svg": "826d608bc7e158b4db6f190373ceb167",
"assets/assets/images/calendar-star.svg": "571b232f2b83f560b2c9518f8897f6e2",
"assets/assets/images/arrow_down.svg": "dc097e630476bcd5522c757d83a6ab93",
"assets/assets/images/chat.svg": "a7744b47365cf07b24fb0d88f8c2eaf1",
"assets/assets/images/sidebar_collapse.svg": "f32011eb3af5ea104c86a4e73054ece3",
"assets/assets/images/phone-call.svg": "5e26342a66d6287a08399eae48c0915e",
"assets/assets/images/no_comments_found.svg": "21ec31d07fef9430f959a0ab914662f4",
"assets/assets/images/img_success.svg": "d50a92ca0fd2a4cf609cdf04e4687303",
"assets/assets/images/virtual_360.svg": "0f4e6f037e701bcfdba5c8d2b6144ddc",
"assets/assets/images/file-description.svg": "1046894a045eb9f8bab5f6c04956c85b",
"assets/assets/images/file_type_doc.svg": "d9c5b20f9d3f5038795974e64c046c36",
"assets/assets/images/trash.svg": "117c2ee577d00dbfd44af81cd6f23940",
"assets/assets/images/clock-up.svg": "447feac9afb399495866f939bed0edf1",
"assets/assets/images/rating_outline.svg": "22acd8eba94c98ade6d0a3fdaf100cd8",
"assets/assets/images/edit.svg": "f437e5ff98f56412ce0978a197e07212",
"assets/assets/images/alert-circle.svg": "e7a83f7b7c563e80301768bbaa5b70f4",
"assets/assets/images/checkbox.svg": "04b4a89ded7864ac9f9f718bdecb8da6",
"assets/assets/images/delete_logo.svg": "e4529d599051fe1c4cb823ba39a28739",
"assets/assets/images/no_data_found.svg": "f3a4938d662bcbc5775bac411713260e",
"assets/assets/images/cash.svg": "ddb863f76ac8b0e78d5ba91eee2a0179",
"assets/assets/images/positive_icon.svg": "81a940bb3450d85dd009f690164a0044",
"assets/assets/images/map-pin-1.svg": "8678a709b9ba9d867348789998900cb7",
"assets/assets/images/icon_txt.png": "5b128329fe664f72e480435438c0ab8a",
"assets/assets/images/call_blue.svg": "af17c777762c1c65ad0682c6ba35e34d",
"assets/assets/images/user-circle.svg": "c0d03399b472ca54f0e82ee72cb63353",
"assets/assets/images/delete.svg": "81223fa21eb3f3dd582038d5ec0ca8f4",
"assets/assets/images/phone.svg": "a9dd2a5af61332076745ba3844d042a8",
"assets/assets/images/no_data_found.png": "1417cba1b664f7ff98bb74f08d703b31",
"assets/assets/images/day_view.svg": "84a01e37afadf7c162f386a1e644b0da",
"assets/assets/images/user_unassign.svg": "245a0e65a24cf0a3bfaffda19a245cc9",
"assets/assets/images/mail_img.svg": "b9e80eabfa1400b9d99cdd497edc747a",
"assets/assets/images/icon_theme.svg": "a4ab35c8e9dc737efdf7ca9f486f2900",
"assets/assets/images/video.svg": "8db24810a40a753df200ed2c38c0425a",
"assets/assets/images/filter.svg": "4d8f55506d8cd4946e64e1eeb77b21bf",
"assets/assets/images/file_type_doc_white.svg": "bbca9b14dae13bfc5f51e394db1df96e",
"assets/assets/images/week_view.svg": "d1e84e43070264c6151429dbb9449dbb",
"assets/assets/images/calendar-due.svg": "fda731f20eeb23bed1b80f6318798220",
"assets/assets/images/right_arrow_icon.svg": "c524eb45af77bea7f75e96a8ad824827",
"assets/assets/images/file-upload.svg": "e2ab2108c2d6741ff4a1866fcbe311c8",
"assets/assets/images/no_time_slot.svg": "8b5ba6e43294e8bd458a6632e2283890",
"assets/assets/images/id.svg": "b4d197dcbef61fbe34adc213f39699a2",
"assets/assets/images/man.svg": "3efe6e969589aef2bae58b9f469787f3",
"assets/assets/images/building.svg": "dc4ec912dbb52e43dd1dd760bd4e1a72",
"assets/assets/images/icon_doc.png": "45fc684b14582334d7049d64fcbbf5f2",
"assets/assets/images/reschedual_icon.svg": "d7f0d5d9337b33258df7d4848848d03f",
"assets/assets/images/img_error.svg": "a916197576cf9ec2398858079eac16d7",
"assets/assets/logo/sattva-logo-white.gif": "d949b4da321953cf551cfbd9b92a3ebd",
"assets/assets/logo/logo.gif": "2a30b72fe48767a107aa5b192fad1f7b",
"assets/assets/logo/login_bg.png": "5feac938986403e77c4fe5ebe5a52e26",
"assets/assets/logo/sattva_color_logo_512.jpg": "e740cbbfddd153292933c4d472622b6a",
"assets/assets/logo/sattva_color_logo.png": "34ea66b889f7db4d40bde54c23571b69",
"assets/assets/logo/small_logo.png": "c00c6e219017969e3ee38a825d399f71",
"assets/assets/logo/sattvaLogoGif.gif": "744966340f4ecb8bf78530d8814cb692",
"assets/assets/logo/sattva_logo_dark.gif": "2a30b72fe48767a107aa5b192fad1f7b",
"assets/assets/nodatafound/404.svg": "15282caadb0f87944972bd5074deb67b",
"assets/assets/nodatafound/no_data_found.svg": "3a71d6644cd941d5256aec06378fd949",
"assets/assets/fonts/ProductSans-LightItalic.ttf": "a7b47650ea4bfb29cc284c9d383a4db1",
"assets/assets/fonts/Inter.ttc": "57479dfd04aada5ab35b4ebdbdc10088",
"assets/assets/fonts/ProductSans-BlackItalic.ttf": "d165693949a2366b8baef8ec592417dd",
"assets/assets/fonts/ProductSans-Light.ttf": "5ea2ab343da06f7eb96ea959895665ea",
"assets/assets/fonts/ProductSans-Medium.ttf": "9c51beb79b8ab173abd924ce39178f0b",
"assets/assets/fonts/ProductSans-Bold.ttf": "a19a7b108b2e3961fc855c6ea5a6546f",
"assets/assets/fonts/ProductSans-Italic.ttf": "af05b47de35fd5a5960ad1e440a4c0c7",
"assets/assets/fonts/Noto_Sans/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/fonts/Noto_Sans/NotoSans-Medium.ttf": "09dc02dbe8133545806d275a2fec2ca7",
"assets/assets/fonts/Noto_Sans/NotoSans-MediumItalic.ttf": "56b26130ad737af823876161cbf59aac",
"assets/assets/fonts/Noto_Sans/NotoSans-Black.ttf": "45e579d4c5952595df0d5b0dfe75d53e",
"assets/assets/fonts/Noto_Sans/NotoSans-Bold.ttf": "ef4b39fb4d49db8beed2966debc0f477",
"assets/assets/fonts/Noto_Sans/NotoSans-Thin.ttf": "1cf299dc471a137219ca9570173f53a1",
"assets/assets/fonts/Noto_Sans/NotoSans-SemiBold.ttf": "dfad8b708bc7b6911ed49a6f35680b10",
"assets/assets/fonts/Noto_Sans/NotoSans-SemiBoldItalic.ttf": "57e2664158eac90f6a0a5de9b1291e63",
"assets/assets/fonts/Noto_Sans/NotoSans-BoldItalic.ttf": "7b50b562b03b059512d9fd54573dca13",
"assets/assets/fonts/Noto_Sans/NotoSans-BlackItalic.ttf": "4da79193c9e346ea5877bf31ba3f94e0",
"assets/assets/fonts/Noto_Sans/NotoSans-ExtraBoldItalic.ttf": "21e246f744cf6c5826e93b410aca6d46",
"assets/assets/fonts/Noto_Sans/NotoSans-ExtraLight.ttf": "457f3e71429cfa0fb7fc7e79d2505389",
"assets/assets/fonts/Noto_Sans/NotoSans-ThinItalic.ttf": "25497ed489bcc742bbe91f27d2ad467c",
"assets/assets/fonts/Noto_Sans/NotoSans-ExtraLightItalic.ttf": "aa3d89b196996882493b38598b44f18f",
"assets/assets/fonts/Noto_Sans/NotoSans-ExtraBold.ttf": "d46a62701edeada8a839b0be13da8406",
"assets/assets/fonts/ProductSans-Black.ttf": "909eeb19f58cc8c0bc45422f2745cc8a",
"assets/assets/fonts/ProductSans-MediumItalic.ttf": "b7efc2304b5103df6a75befa88d42d40",
"assets/assets/fonts/ProductSans-Thin.ttf": "3c36b2574c62d41428b496b7512e952d",
"assets/assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/assets/fonts/ProductSans-BoldItalic.ttf": "281acf49bbcece01beff18a4a59f9bfd",
"assets/assets/fonts/ProductSans-ThinItalic.ttf": "4b3b9e82158bd2a00b97eba4dd8d6cfa",
"web_js/worker_helper.js": "885dec2f916d6d7fdff13c28c77a75a4",
"web_js/worker.js": "5dee532652dbc36780fd4ed0743fc95c",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
