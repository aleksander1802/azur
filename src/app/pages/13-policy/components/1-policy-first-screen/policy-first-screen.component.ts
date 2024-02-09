import { Component } from '@angular/core';

@Component({
    selector: 'app-policy-first-screen',
    templateUrl: './policy-first-screen.component.html',
    styleUrl: './policy-first-screen.component.scss',
})
export class PolicyFirstScreenComponent {
    currentCrumbsTitle = 'Политика конфиденциальности';

    privacyParagraphs = [
        'OuSituated on the slopes of Cap Ferrat in a private setting with breathtaking sea views and yet just a short walk from the village and harbour of Saint Jean Cap Ferrat, this villa is one of the most desirable properties on this stretch of the French Riviera.Modern and open plan, the villa offers the perfect setting for both relaxing and entertaining. Expansive glass windows and sliding doors flood rooms with natural light whilst providing guests with outstanding sea views. With 1000m2 of living space spread across four floors and served by a glass elevator, there is plenty of room to host events or find a quiet corner in which to relax. Villa has five luxurious bedrooms with private bathrooms and able to comfortably accommodate up to 10 guests.',
        'All of the rooms have lounge areas, beautiful ensuite bathrooms and Bang & Olufsen entertainment systems. A seventh double bedroom is available for staff.',
        'You are arriving on the Côte d’Azur to spend a beautiful vacation with your family and you do not want to waste your time dealing with all small problems due to your property that have accumulated while you’ve been absent? ',
        'Ou Situated on the slopes of Cap Ferrat in a private setting with breathtaking sea views and yet just a short walk from the village and harbour of Saint Jean Cap Ferrat, this villa is one of the most desirable properties on this stretch of the French Riviera. Villa has five luxurious bedrooms with private bathrooms and able to comfortably accommodate up to 10 guests. All of the rooms have lounge areas, beautiful ensuite bathrooms and Bang & Olufsen entertainment systems. A seventh double bedroom is available for staff.',
    ];
}
