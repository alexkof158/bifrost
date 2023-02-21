const { app, BrowserWindow, Menu, ipcMain } = require('electron')
//Cargar el modulo de path

//cargar carpeta de archivos




function createWindow () {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
        }
    })

    


    //Crear Menu
    const menu = Menu.buildFromTemplate([
        
        {
            label: 'Incidencia',
            submenu: [
                {
                    label: 'Solución Generica de Incidencias',
                    accelerator: 'Ctrl+N',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('index.html')
                    }
                }
            ]
        },
        {
            label: 'Requerimientos',
            submenu: [
               
                {
                    label: 'Conceptos Técnicos',
                    accelerator: 'Ctrl+T',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('conceptos.html')
                    }
                },
                {
                    label: 'Instalación, configuración y otros',
                    accelerator: 'Ctrl+I',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('instalacion.html')
                    }
                }
            ]
        },
        {   
            label: 'Casos frecuentes',
            submenu: [
                {
                    label: 'Brigada Salud Informática',
                    click(){
                    //Crear nueva ventana
                    win.loadFile('../bifrost/casoscomunes/brigada_salud.html')
                    }
                },    
                {   
                    label: 'Configuración de Perfil',
                    click(){
                    //Crear nueva ventana
                    win.loadFile('../bifrost/casoscomunes/perfil.html')
                    }

                },
                {
                    label: 'Configuración de Impresoras',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('../bifrost/casoscomunes/conf_impresora.html')
                    }
                },
                {
                    label: 'Atasco de Papel',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('../bifrost/casoscomunes/atasco_papel.html')
                    }
                },
                {
                    label: 'Formatear Equipos',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('../bifrost/casoscomunes/formatear.html')
                    }
                },
                {
                    label: 'Actualización de Firma',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('../bifrost/casoscomunes/actualizacion_firma.html')
                    }
                },
                {
                    label: 'Instalación Elogic',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('../bifrost/casoscomunes/elogic.html')
                    }
                },
                {
                        label: 'Alistamiento VC',
                        accelerator: 'Ctrl+A',
                        click(){
                            //Crear nueva ventana
                            win.loadFile('../bifrost/casoscomunes/acomp.html')
                        }
                },
                {
                    label: 'Equipo Fuera de Dominio',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('../bifrost/casoscomunes/out_domain.html')
                    }
                },
                {
                    label: 'Falla de Memoria Ram',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('../bifrost/casoscomunes/falla_memoria.html')
                    }
                },
                {
                    label: 'Instalación de Office 2010',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('../bifrost/casoscomunes/office2010.html')
                    }
                },
                {
                    label: 'Instalación de Office 365',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('../bifrost/casoscomunes/office365.html')
                    }

                }
            ]

        },
       

        {
            label: 'DevTools',
            submenu: [
                {
                    label: 'Mostrar/Ocultar DevTools',
                    click(item,focusedWindow){
                        focusedWindow.toggleDevTools()
                    }

                },
                {
                    role: 'reload'
                }
            ]

        },
        ,
        {
            label: 'About',
            submenu: [
                {
                    label: 'Contacto',
                    click(){
                        //Crear nueva ventana
                        win.loadFile('contact.html')
                    }
                },
                {
                    label: 'Acerca de',
                    click(){
                        win.loadFile('version.html')
                    }
                }
                
            ]
        },
        {
            label: 'Salir',
            accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
            click(){
                app.quit()
            }
        }
    ])
    Menu.setApplicationMenu(menu)
    
    // and load the index.html of the app.
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)


