function 後轉 (L: number, R: number) {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, L)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, R)
}
function 原地左轉 (L: number, R: number) {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, L)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, R)
}
function 向前 (速度: number) {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 速度)
}
function 後退 (速度: number) {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 速度)
}
function 原地右轉 (L: number, R: number) {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, L)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, R)
}
function 轉 (L: number, R: number) {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, L)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, R)
}
