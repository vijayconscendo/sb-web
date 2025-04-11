import { Component, Input } from '@angular/core';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  expanded: boolean;
}

@Component({
  selector: 'app-accordion-block',
  imports: [],
  templateUrl: './accordion-block.component.html',
  styleUrl: './accordion-block.component.scss'
})
export class AccordionBlockComponent {
  @Input() items: AccordionItem[] = [
    {
      id: 'item1',
      title: 'Accordion Item #1',
      content: '<strong>This is the first item\'s accordion body.</strong> It is shown by default.',
      expanded: true
    },
    {
      id: 'item2',
      title: 'Accordion Item #2',
      content: '<strong>This is the second item\'s accordion body.</strong> It is hidden by default.',
      expanded: false
    },
    {
      id: 'item3',
      title: 'Accordion Item #3',
      content: '<strong>This is the third item\'s accordion body.</strong> It is hidden by default.',
      expanded: false
    }
  ];

  toggleItem(item: AccordionItem): void {
    // Close all items first if you want only one open at a time
    // this.items.forEach(i => i.expanded = false);
    
    // Toggle the clicked item
    item.expanded = !item.expanded;
  }
}
