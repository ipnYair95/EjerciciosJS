export class Corrida {
    constructor(_numeroCorrida, _descripcionServicio, _empresa, _descripcionEmpresa, _tienePromocion) {
        this._numeroCorrida = _numeroCorrida;
        this._descripcionServicio = _descripcionServicio;
        this._empresa = _empresa;
        this._descripcionEmpresa = _descripcionEmpresa;
        this._tienePromocion = _tienePromocion;
    }
    get numeroCorrida() {
        return this._numeroCorrida;
    }
    set numeroCorrida(numeroCorrida) {
        this._numeroCorrida = numeroCorrida;
    }
    get descripcionServicio() {
        return this._descripcionServicio;
    }
    set descripcionServicio(descripcionServicio) {
        this._descripcionServicio = descripcionServicio;
    }
    get empresa() {
        return this._empresa;
    }
    set empresa(empresa) {
        this._empresa = empresa;
    }
    get descripcionEmpresa() {
        return this._descripcionEmpresa;
    }
    set descripcionEmpresa(descripcionEmpresa) {
        this._descripcionEmpresa = descripcionEmpresa;
    }
    get tienePromocion() {
        return this._tienePromocion;
    }
    set tienePromocion(tienePromocion) {
        this._tienePromocion = tienePromocion;
    }
}