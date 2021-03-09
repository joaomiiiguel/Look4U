import { htmlApi } from './api'
export async function htmlToImage (html) {
  const response = await htmlApi.post('/', {html})
  return response.data.image
}
export function montarHtml ({
  mascaraBase64,
  rostoBase64,
  camisaBase64,
  calcaBase64,
  shortBase64,
  corpoBase64
}) {
  return `<head>
            <title>Meta</title>
          </head>
          <style>
            body {
              background-color: #f2f2f2;
            }
            div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            #camisa {
              position: relative;
              height: 210;
              bottom: 25;
              z-index: 1;
            }
            #short {
              position: absolute;
              height: 158;
              top: 300;
              margin-left: 5px
            }
            #calca {
              position: relative;
              height: 280;
              width: 120;
              bottom: 50px;
              left: 4;
              z-index: 0;
            }
            #mascara {
              position: absolute;
              height: 110;
              width: 60;
              top: 15;
              z-index: 500;
              object-fit: cover;
            }
            #rosto {
              position: relative;
              height: 110;
              width: 60;
              object-fit: cover;
              top: 5;
              border-radius: 50px;
              border-bottom-left-radius: 50%;
              border-bottom-right-radius: 50%;
              padding-top: 10
            }
            #corpo {
              position: absolute;
              z-index: -500;
              height: 600;
            }
          </style>
          <body>
            <div>
                <img id="mascara" src="${mascaraBase64}" />
                <img id="rosto" src="${rostoBase64}" />
                <img id="camisa" src="${camisaBase64}" />
                <img id="calca" src="${calcaBase64}" />
                <img id="short" src="${shortBase64}" />
                <img id="corpo" src="${corpoBase64}" />
            </div>
          </body>`
}
export default { htmlToImage, montarHtml }
