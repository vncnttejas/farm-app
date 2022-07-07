## Manifests

The folder contains 2 sets of manifests

1. Kubernetes Manifests - A k8s only approach to deploy the app
2. Helm Chart - A helm chart for the farm-app

### Kuberntes Manifests

The Kubernetes manifests can be found in the k8s folder, this manifest can be used by the following command, from the root directory
```bash
kubectl apply -f ./manifests/k8s
```
### Helm Chart
The helm chart can be found in the farm-app-chart folder, this is the chart that is used as part of the CI/CD deployment. the chart can be installed with the following command
```bash
helm install farm-app-release --set image.tag="main-582da7ed8e37bc7be9c02bea1290b7d01d28f2c4" -f ./manifests/dev.yaml  farm-app-chart
```
