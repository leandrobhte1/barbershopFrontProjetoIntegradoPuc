import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from './tabActions'

export function initTab() {
    return [
        showTabs('tabNota', 'tabPreco', 'tabProximidade'),
        selectTab('tabNota'),
    ]
}