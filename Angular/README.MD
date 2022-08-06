# Angular QA
1. Revision for Angular: https://github.com/kirandash/angular-revision

## Q1. How to make your angular app ready for production?
1. `ng build`

## Q2. What are observables?
1. Angular makes use of observables as an interface to handle a variety of common asynchronous operations.
    * **custom events** that sends observable output from child to parent: `@Output() open = new EventEmitter<any>() and open.emit()`
    * **HTTP modules**: to handle AJAX requests and responses.
        - no mutation of api response
        - cancellable through unsubscribe
        - easy retry
    * **Router and form module**: use observables to listen for and respond to user input events.

## Q3. What are services?
1. It holds the business logic. Or interaction with third party apis for fetching/posting data. While the components just calls the services and use them.
2. No angular specific declaration. Plane old javascript class declaration like below code.
3. Use:
    * For data fetch and send. (**Reusable, modular and testable**)
    * For business logics. (Reusable, modular and testable)

## Q4. What are directives? How Many types of directives?
1. Directives are instruction that tells/directs angular to do something. It also allows you to attach behavior to a DOM element.
2. Types: Attribute, Structural and Component

## Q5. What is attribute directive?
1. **Attribute directives** are used for changing behavior say design etc of DOM elements but do not change their structure.
    * `[ngClass]="{'medium-movies':mediaItem.medium==='Movies', 'medium-series':mediaItem.medium==='Series'}"`
    
## Q6. How events are attached to directive?
1. ElementRef, HostListener, 

## Q7. How to pass external data into directive?
1. @Input data binding can be used to pass data from a component to directive.

## Q8. What are structural directives?
1. Structural directives are those that can modify HTML DOM. e.g. ngStyle and ngClass.
    - E.g. `*ngIf`, `*ngFor` etc. they all start with * - * is a shortcut for `<ng-template>`

## Q9. What are components directives?
1. Component directives add DOM elements. It requires a view along with its attached behavior. E.g. AppComponent

## Q10. How routing works in Angular?
1. It helps angular app to navigate b/w different views and components. Angular has a single instance of router servers. It builds a tree structure of active route objects and contains current state of the router.

## Q11. What are router guards?
1. Router guard is an interface method that routes on to check after authorization. After guard runs it resolves the route data. E.g. `activatedRoute` etc.
