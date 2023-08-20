let palette = fxrand();
if (palette < 0.33) {
    cool1 = ["#c2efb3", "#97abb1", "#892f65", "#633d73", "#4331a0"],
    cool11 = ["#f1fbee", "#c5d0d3", "#c9be9d", "#b2986c", "#9d8243"],
    cool12 = ["#f72585", "#b5179e", "#7209b7", "#560bad", "#480ca8", "#3a0ca3", "#3f37c9", "#4361ee", "#4895ef", "#4cc9f0"],
    cool2 = ["#db2b39", "#29335c", "#f3a712", "#f0cea0", "#534d41"],
    cool21 = ["#0081af", "#00abe7", "#2dc7ff", "#ead2ac", "#eaba6b"],
    cool22 = ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"],
    cool3 = ["#a63446", "#fbfef9", "#0c6291", "#000004", "#7e1946"],
    cool31 = ["#f7b2b7", "#f7717d", "#de639a", "#7f2982", "#16001e"],
    cool32 = ["#582f0e", "#7f4f24", "#936639", "#a68a64", "#b6ad90", "#c2c5aa", "#a4ac86", "#656d4a", "#414833", "#333d29"],
    cool4 = ["#dbd56e", "#88ab75", "#2d93ad", "#7d7c84", "#de8f6e"],
    cool41 = ["#044389", "#fcff4b", "#ffad05", "#7cafc4", "#5995ed"],
    cool42 = ["#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529"],
    cool5 = ["#241023", "#6b0504", "#a3320b", "#d5e68d", "#47a025"],
    cool51 = ["#fdfffc", "#235789", "#c1292e", "#f1d302", "#161925"],
    cool52 = ["#10451d", "#155d27", "#1a7431", "#208b3a", "#25a244", "#2dc653", "#4ad66d", "#6ede8a", "#92e6a7", "#b7efc5"],
    cool6 = ["#272932", "#4d7ea8", "#828489", "#9e90a2", "#b6c2d9"],
    cool61 = ["#e08dac", "#6a7fdb", "#57e2e5", "#45cb85", "#153131"],
    cool62 = ["#eae4e9", "#fff1e6", "#fde2e4", "#fad2e1", "#e2ece9", "#bee1e6", "#f0efeb", "#dfe7fd", "#cddafd"],
    cool7 = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
    cool8 = ["#000000", "#202020", "#404040", "#808080", "#c0c0c0", "#e0e0e0", "#ffffff"]
} else if palette < 0.66) {
    cool1 = ["#A6E22E", "#F92672", "#66D9EF", "#AE81FF", "#A1EFE4"],
    cool11 = ["#FD971F", "#EF5939", "#A6E22E", "#F8F8F2", "#272822"],
    cool12 = ["#F92672", "#66D9EF", "#A6E22E", "#AE81FF", "#FD971F"],
    cool2 = ["#B5B8B1", "#7F99A4", "#3B6068", "#3B3C3D", "#1E1F26"],
    cool21 = ["#D8DBE2", "#A1A5B2", "#747C92", "#5E637A", "#333745"],
    cool22 = ["#D8DEE9", "#81A1C1", "#5E81AC", "#4C566A", "#2E3440"],
    cool3 = ["#E5B083", "#E87A59", "#D83367", "#9B539C", "#5A5086"],
    cool31 = ["#FF4500", "#FF6347", "#FF69B4", "#FF8C00", "#FFD700"],
    cool32 = ["#F4A460", "#DAA520", "#BDB76B", "#8B4513", "#A52A2A"],
    cool4 = ["#D1EECC", "#91C7B1", "#62997A", "#556055", "#504A4E"],
    cool41 = ["#E9EDC9", "#FED3A0", "#FFB482", "#FC7C5F", "#6B4226"],
    cool42 = ["#2E5266", "#6E8898", "#9FB1BC", "#D3D0CB", "#F4F1BB"],
    cool5 = ["#A13941", "#D17C5D", "#BFBEB5", "#C3A29E", "#3B3330"],
    cool51 = ["#4B4237", "#D1C0A5", "#747274", "#9B8AA3", "#ACD8AA"],
    cool52 = ["#6E0D25", "#C1502E", "#AC433D", "#1B4332", "#2D732C"],
    cool6 = ["#4B3F72", "#9A538D", "#E75A7C", "#EA9AB2", "#FFC3A0"],
    cool61 = ["#6C5B7B", "#C06C84", "#F67280", "#F8B195", "#355C7D"],
    cool62 = ["#99B898", "#2A363B", "#FECEA8", "#FF847C", "#E84A5F"],
    cool7 = ["#F8E9D1", "#E2B4BD", "#AB6C82", "#6B4226", "#4A2C2B"],
    cool8 = ["#A8A495", "#D4C5A5", "#392F2B", "#2B2D2F", "#1D1E1F"]
} else {
    cool1 = ["#A4D8C2", "#2998AB", "#5E2E68", "#D9A5B3", "#735CDD"],
    cool11 = ["#D8F3DC", "#B8DFD8", "#6B4226", "#EE9B00", "#FAEDCA"],
    cool12 = ["#F64C72", "#92DCE5", "#287271", "#FFD166", "#EF476F"],
    cool2 = ["#E63946", "#F1FAEE", "#457B9D", "#FFC43D", "#DA5552"],
    cool21 = ["#003E1F", "#005824", "#007028", "#53A684", "#B5E2FA"],
    cool22 = ["#232020", "#344E41", "#4A6A6C", "#6B4226", "#E8D5E3"],
    cool3 = ["#1D1F2F", "#283655", "#4A4E69", "#6F6A8D", "#9E92A3"],
    cool31 = ["#FF616D", "#FFC3A0", "#FF9A8C", "#FF676D", "#D83367"],
    cool32 = ["#A8A7A1", "#CC527A", "#E8175D", "#474747", "#363636"],
    cool4 = ["#355070", "#6B4226", "#D9ED92", "#B5E48C", "#E9D8A6"],
    cool41 = ["#C08497", "#F7AF9D", "#F7E3AF", "#F3EEC3", "#2A9D8F"],
    cool42 = ["#D8A7B1", "#8E6877", "#4B3B40", "#1A1A1B", "#0D0C1D"],
    cool5 = ["#F72585", "#FF8360", "#FFDAC1", "#FF9B54", "#F5E1DA"],
    cool51 = ["#4E598C", "#39A0ED", "#3B6998", "#D4E4BC", "#56CBF9"],
    cool52 = ["#58355E", "#E03616", "#B8D8B8", "#FFB6B6", "#99E1D9"],
    cool6 = ["#22223B", "#4A4E69", "#9A8C98", "#C9ADA7", "#F2E9E4"],
    cool61 = ["#FFBA08", "#FAA307", "#F48C06", "#D00000", "#6A0572"],
    cool62 = ["#9E2A2B", "#540B0E", "#D3C0D2", "#B8336A", "#BE95C4"],
    cool7 = ["#DE6B48", "#E5B181", "#F4DCD6", "#1F6FEB", "#5D5FEF"],
    cool8 = ["#001219", "#005F73", "#0A9396", "#94C9A9", "#E9D8A6"]
}