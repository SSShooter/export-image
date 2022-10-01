// import { saveAs } from 'file-saver'
import { exportSvg, exportPng } from './painter'

export default function (me) {
  me.exportSvg = exportSvg
  me.exportPng = exportPng
}
