import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onKeyPress(value:MouseEvent){
    const element = value.target as HTMLElement
    const content= element.textContent as string
    if (content != '/' && content != 'x' && content != 'DEL' && content != '+' && content != '-' && content != '=' && content != 'RESET') {
      
      if (this.showValue === '' && content ==='.') {
        this.showValue='0'
      } 
        this.showValue += element.textContent as string
        if(content !=='.' && !this.showValue.includes('.')){
          this.showValue= this.showValue.charAt(0)==='0' && this.showValue.length >1 ? this.showValue.substring(1): this.showValue
        }


    }else{
      switch (content) {
        case 'DEL':
          this.showValue=this.showValue.substring(0, this.showValue.length  - 1)
          this.showValue= this.showValue === '' ? this.showValue = '0' : this.showValue 
          break;
        case 'RESET':
          this.showValue='0'
          this.value1=0
          break;
        case '+':
          this.value1=parseInt(this.showValue)
          this.showValue='0'
          this.operationType ='+'
          break;
      
        case '-':
          this.value1=parseInt(this.showValue)
          this.showValue='0'
          this.operationType ='-'
          break;
      
        case 'x':
          this.value1=parseInt(this.showValue)
          this.showValue='0'
          this.operationType ='x'
          break;
      
        case '/':
          this.value1=parseInt(this.showValue)
          this.showValue='0'
          this.operationType ='/'
          break;

        case '=':
          this.operation(this.operationType)
          break;
      
        default:
          break;
      }
    }

  }
  operation(type:string){
    switch (type) {
      case '/':
        this.showValue = ''+((this.value1 / parseInt(this.showValue)).toFixed(2))
        break;
      case '+':
        this.showValue = ''+(this.value1 + parseInt(this.showValue))
        break;
      case '-':
        this.showValue = ''+(this.value1 - parseInt(this.showValue))
        break;
      case 'x':
        this.showValue = ''+(this.value1 * parseInt(this.showValue))
        break;
    
      default:
        break;
    }
  }
  themeHasChange(theme:string | null){
    console.log(theme)
    switch (theme) {
      case '1':
        this.theme={        
        ['--toggle']:'var(--toggle1)',
        ['--backgroundToggle']:'var(--backgroundToggle1)',
        ['--background']:'var(--background1)',
        ['--text']:'var(--text1)',
        ['--secondaryText']:'var(--secondaryText1)',
        ['--screenBackground']:'var(--screenBackground1)',
        ['--keyBackground']:'var(--keyBackground1)',
        ['--keyShadow']:'var(--keyShadow1)',
        ['--secondarykeyShadow']: 'var(--secondarykeyShadow1)',
        ['--secondarykey']:'var(--secondarykey1)',
        ['--thirdkeyShadow']:'var(--thirdkeyShadow1)',
        ['--thirdkey']:'var(--thirdkey1)',
        ['--headertext']:'var(--headertext1)'
      }
        break;
      case '2':
        this.theme={        
          ['--toggle']:'var(--toggle2)',
          ['--backgroundToggle']:'var(--backgroundToggle2)',
          ['--background']:'var(--background2)',
          ['--text']:'var(--text2)',
          ['--secondaryText']:'var(--secondaryText2)',
          ['--screenBackground']:'var(--screenBackground2)',
          ['--keyBackground']:'var(--keyBackground2)',
          ['--keyShadow']:'var(--keyShadow2)',
          ['--secondarykeyShadow']: 'var(--secondarykeyShadow2)',
          ['--secondarykey']:'var(--secondarykey2)',
          ['--thirdkeyShadow']:'var(--thirdkeyShadow2)',
          ['--thirdkey']:'var(--thirdkey2)',
          ['--headertext']:'var(--headertext2)'
        }
        break;
      case '3':
        this.theme={        
          ['--toggle']:'var(--toggle3)',
          ['--backgroundToggle']:'var(--backgroundToggle3)',
          ['--background']:'var(--background3)',
          ['--text']:'var(--text3)',
          ['--secondaryText']:'var(--secondaryText3)',
          ['--screenBackground']:'var(--screenBackground3)',
          ['--keyBackground']:'var(--keyBackground3)',
          ['--keyShadow']:'var(--keyShadow3)',
          ['--secondarykeyShadow']: 'var(--secondarykeyShadow3)',
          ['--secondarykey']:'var(--secondarykey3)',
          ['--thirdkeyShadow']:'var(--thirdkeyShadow3)',
          ['--thirdkey']:'var(--thirdkey3)',
          ['--headertext']:'var(--headertext3)'
        }
        break;
    
      default:
        break;
    }
  }
  showValue:string='0'
  value1:number = 0;
  operationType:string=''
  theme:Object={}
}
