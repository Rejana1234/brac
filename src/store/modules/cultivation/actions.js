import {http} from "../../../service/http_service";


export const get_cultivation = async ({commit}, data) => {
    const res = await http().get('v1/cultivation/getData?' + data);
    commit('GET_CULTIVATION', res.data);
};

export const add_cultivation = async ({commit}, data) => {
    const res = await http().post('v1/cultivation/store', data);
    commit('CULTIVATION_STORE', res.data);
};

export const edit_cultivation = async ({commit}, id) => {
    const res = await http().get(`v1/cultivation/edit/${id}`);
    commit('GET_EDIT_CULTIVATION', res.data.cultivationCategory);
};

export const update_cultivation = async ({commit}, {id, data}) => {
    const res = await http().post(`v1/cultivation/update/${id}`, data);
    commit('CULTIVATION_UPDATE', res.data);
};

export const delete_cultivation = async ({commit}, id) => {
    const res = await http().delete(`v1/cultivation/destroy/${id}`);
    commit('DELETE_CULTIVATION', { id: id, data: res.data });
};