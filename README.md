
# 日常前端开发用到的一些工具和配置文件

## Vue
----
- basic_vue.config.js
  - 普通配置，能用多了一些别名路径，可控打包路径等，加了代理

## React
----  

## 代码规范
----  
- eslintrc.js
- .prettierrc


## Webstorm
---- 
- keymap
    - 鼠标调到最后

## vscode
----   

## 模板
----  
- gitignore
- .prettierignore
    - 跳过检测白名单
- settings.json
    - vscode 的读取配置项 

## 自动化
----   

## 工具类
----   

- AutoHotkey
    - window 下切换窗体虚拟机快速等,配置文件，左Ctrl+滚轮切屏 Alt+q 隐藏图标
    ```Javascript
        #NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
        ; #Warn  ; Enable warnings to assist with detecting common errors.
        SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
        SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
        
        ~LControl & WheelUp::
        Send {LWin Down}{Ctrl Down}{Left}{Ctrl Up}{LWin Up}
        return
        ~LControl & WheelDown::
        Send {LWin Down}{Ctrl Down}{Right}{Ctrl Up}{LWin Up}
        return
        
        !q::
        HideOrShowDesktopIcons()
        return
         
        HideOrShowDesktopIcons()
        {
            ControlGet, class, Hwnd,, SysListView321, ahk_class Progman
            If class =
                ControlGet, class, Hwnd,, SysListView321, ahk_class WorkerW
         
            If DllCall("IsWindowVisible", UInt,class)
                WinHide, ahk_id %class%
            Else
                WinShow, ahk_id %class%
        }
    ```


- Everything+Wox
    - 神器window下搜索文件，快速启动任务
