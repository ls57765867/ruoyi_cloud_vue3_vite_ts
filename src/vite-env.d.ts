/// <reference types="vite/client" />
import { _RouteRecordBase } from 'vue-router'
declare module 'vue-router' {
  interface _RouteRecordBase {
    hidden?: boolean | string | number
    permissions?: string[]
    roles?: string
  }
}
declare module 'jsencrypt/bin/jsencrypt.min'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    getDicts: Function
    getConfigKey: Function
    download: Function
    parseTime: Function
    dateTimeSub: Function
    resetForm: Function
    cleanTableSelection: Function
    setTableRowSelected: Function
    handleTree: Function
    addDateRange: Function
    selectDictLabel: Function
    selectDictLabels: Function
  }
}
declare module 'vue-cropper'
